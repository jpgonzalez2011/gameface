class Api::FriendshipsController < ApplicationController

  def index
    @user = User.find(params[:user_id])
    @friends = @user.friends
  end

  def update_rating()
    debugger
    @first_friendship = Friendship.where("requested_friend = :first and received_friend = :second", { first: params[:firstFriend], second: params[:secondFriend] }).to_a
    @second_friendship = Friendship.where("requested_friend = :second and received_friend = :first", { first: params[:firstFriend], second: params[:secondFriend] }).to_a
    @friendship = @first_friendship[0] || @second_friendship[0]
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
