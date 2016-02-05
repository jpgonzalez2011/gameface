class Api::SessionsController < ApplicationController

  def show
    if current_user
      @user = current_user
      render json: [{id: @user.id, username: @user.username, fname: @user.fname,
        profile_thumb_url: @user.profile_picture.image.url(:thumb)}]
    else
      render json: [{id: "no-user-found"}]
    end
  end

  def create
    @user = User.includes(:profile_picture).find_by_credentials(
        params[:username],
        params[:password]
      )
    if @user
      sign_in!(@user)
      render json: [{id: @user.id, username: @user.username, fname: @user.fname,
        profile_thumb_url: @user.profile_picture.image.url(:thumb)}]
    else
      render json: ["Invalid Credentials!"], status: 401
    end
  end

  def destroy
    sign_out!
    render json: {}
  end
end
