class Api::LikesController < ApplicationController

  def create
    @like = Like.new(like_params)
    if @like.liker_id == current_user.id && @like.save
      render json: {@like.likeable}
    else
      render json: {}
    end
  end
end
