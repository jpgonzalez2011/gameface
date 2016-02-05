class Api::FriendshipsController < ApplicationController

  def index
    @user = User.find(params[:user_id])
    @friends = @user.friends.sort { |x,y| x[:rating] <=> y[:rating] }
  end

  def update_rating()
    @first_friendship = Friendship.where("requested_friend = :first and received_friend = :second", { first: User.find(params[:firstFriend][:id]), second: User.find(params[:secondFriend][:id]) }).to_a
    @second_friendship = Friendship.where("requested_friend = :second and received_friend = :first", { first: User.find(params[:firstFriend][:id]), second: User.find(params[:secondFriend][:id])}).to_a
    @friendship = @first_friendship[0] || @second_friendship[0]
    debugger
    if @friendship
      @friendship[:rating] += 1
      @friendship.save!
    end

    if params[:user_id]
      render :index
    else
      render json: {}
    end
  end
end
