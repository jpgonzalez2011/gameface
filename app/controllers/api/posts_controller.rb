class Api::PostsController < ApplicationController

  def index
    @user = User.find(params[:user_id])
    @posts = Post.includes({ poster: :profile_picture }, comments: { commenter: :profile_picture }).where(target_id: params[:user_id]).order(created_at: :desc)
  end

  def create
    @post = Post.new(post_params)
    if @post.poster_id == current_user.id && @post.save
      render :show
    else
      render json: {}, status: 420
    end
  end

  private

  def post_params
    params.require(:post).permit(:poster_id, :target_id, :content)
  end
end
