class Api::FriendshipsController < ApplicationController

  def index
    @user = User.includes(requested_friendships: {requested_friend: :profile_picture, received_friend: :cover_photo}, received_friendships: {received_friend: :profile_picture, received_friend: :cover_photo}).where(id: params[:user_id]).to_a.first
    @friends = @user.friends.sort { |x,y| x[:rating] <=> y[:rating] }
  end

  def update_rating
    @first_friendship = Friendship.where("requested_friend = :first and received_friend = :second", { first: User.find(params[:firstFriend][:id]), second: User.find(params[:secondFriend][:id]) }).to_a
    @second_friendship = Friendship.where("requested_friend = :second and received_friend = :first", { first: User.find(params[:firstFriend][:id]), second: User.find(params[:secondFriend][:id])}).to_a
    if @first_friendship
      @friendship = @first_friendship[0]
    elsif @second_friendship
      @second_friendship = @second_friendship[0]
    else
      @friendship = nil
    end
    if @friendship
      @friendship[:rating] += 1
      @friendship.save!
    end

      render :index
  end

  def check_friends
    @friendship = Friendship.where("requested_friend = :first and received_friend = :second", {first: User.find(params[:firstFriend]), second: User.find(params[:secondFriend])}).to_a
    @friendship = @friendship + Friendship.where("requested_friend = :second and received_friend = :first", { first: User.find(params[:firstFriend]), second: User.find(params[:secondFriend])}).to_a
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
