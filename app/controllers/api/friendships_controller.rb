class Api::FriendshipsController < ApplicationController

  def index
    @user = User.includes(requested_friendships: {requested_friend: :profile_picture}, received_friendships: {received_friend: :profile_picture}).where(id: params[:user_id]).to_a.first
    requested_friendships = @user.requested_friendships.to_a.select { |friendship| friendship.confirmed == true}
    received_friendships = @user.received_friendships.to_a.select { |friendship| friendship.confirmed == true}
    all_friendships = requested_friendships + received_friendships
    sorted_friendships = all_friendships.sort { |x,y| y[:rating] <=> x[:rating] }
    @friends = sorted_friendships.map do |friendship|
      if friendship.received_friend.id == @user.id
        friendship.requested_friend
      else
        friendship.received_friend
      end
    end
    @friends
  end

  def update_rating
    @first_friendship = Friendship.where("requested_friend = :first and received_friend = :second", { first: User.find(params[:firstFriend]), second: User.find(params[:secondFriend]) }).to_a[0]
    @second_friendship = Friendship.where("requested_friend = :second and received_friend = :first", { first: User.find(params[:firstFriend]), second: User.find(params[:secondFriend])}).to_a[0]
    if @first_friendship.is_a?(Friendship)
      @friendship = @first_friendship
    elsif @second_friendship.is_a?(Friendship)
      @friendship = @second_friendship
    else
      @friendship = nil
    end
    if @friendship
      @friendship[:rating] += 1
      @friendship.save!
    end

      render json: {}
  end

  def check_friends
    if params[:firstFriend] == params[:secondFriend]
      render json: {friendship: "none"}
    else
      @friendship = Friendship.includes(:received_friend, :requested_friend).where("requested_friend = :first and received_friend = :second", {first: User.find(params[:firstFriend]), second: User.find(params[:secondFriend])}).to_a
      @friendship = @friendship + Friendship.includes(:received_friend, :requested_friend).where("requested_friend = :second and received_friend = :first", { first: User.find(params[:firstFriend]), second: User.find(params[:secondFriend])}).to_a
      if !@friendship.empty?
        render json: { friendship:
          {
            requested_friend_id: @friendship[0].requested_friend.id,
            received_friend_id: @friendship[0].received_friend.id,
            friendshipStatus: @friendship[0].confirmed
          }
        }
      else
        render json: {friendship: "none"}
      end
    end
  end

  def create
    @friend = User.find(params[:friend])
    @friendship = Friendship.new(
      requested_friend: @friend,
      received_friend: current_user,
      confirmed: false
    )
    if @friendship.save
      render json: { friendship:
        {
          requested_friend_id: @friendship.requested_friend.id,
          received_friend_id: @friendship.received_friend.id,
          friendshipStatus: @friendship.confirmed
        }
      }
    else
      render json: {}, status: 420
    end
  end

  def confirm_friend
    @requested_friend = current_user
    @received_friend = User.find(params[:friend])
    @friendship = Friendship.where(
      requested_friend: @requested_friend,
      received_friend: @received_friend
    ).to_a[0]
    @friendship.confirmed = true
    if @friendship.save
      render json: {
        friendship:
          {
            requested_friend_id: @friendship.requested_friend.id,
            received_friend_id: @friendship.received_friend.id,
            friendshipStatus: @friendship.confirmed
          }
      }
    else
      render json: {}, status: 420
    end
  end

  def cancel_friend
    @received_friend = current_user
    @requested_friend = User.find(params[:friend])
    @friendship = Friendship.where(
      requested_friend: @requested_friend,
      received_friend: @received_friend
    ).to_a[0]
    if @friendship.destroy
      render json: {
        friendship:
          {
            requested_friend_id: @friendship.requested_friend.id,
            received_friend_id: @friendship.received_friend.id,
            friendshipStatus: @friendship.confirmed
          }
      }
    else
      render json: {}, status: 420
    end
  end
end
