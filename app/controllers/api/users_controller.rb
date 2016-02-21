class Api::UsersController < ApplicationController

  def show
    @user = User.includes(:cover_photo, :profile_picture).find(params[:id])
  end

  def about
    @user = User.find(params[:user_id])
  end

  def create
    @user = User.new(user_params)
    if @user.save
      sign_in!(@user)
      render json: [{id: @user.id, username: @user.username, fname: @user.fname,
        profile_thumb_url: @user.profile_picture.image.url(:thumb)}]
    else
      render json: ["An error has occurred!"], status: 401
    end
  end

  private

  def user_params
    params.require(:newUser).permit(
        :username,
        :fname,
        :lname,
        :date_of_birth,
        :password
      )
  end

end
