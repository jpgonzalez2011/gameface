class Api::TimelineController < ApplicationController

  def index
    @friend_ids = current_user.friends.map {|friend| friend.id }
    @timeline_ids = @friend_ids.push(current_user.id)
    @posts = Post.includes({ poster: :profile_picture }, :target, comments: { commenter: :profile_picture })
                 .where("target_id IN (?) OR poster_id IN (?)", @timeline_ids, @timeline_ids)
                 .uniq { |post| post.id }
    @photos = Photo.includes({uploader: :profile_picture}, comments: {commenter: :profile_picture}).where(uploader_id: @timeline_ids)
    @unsorted_timeline = @posts + @photos
    @timeline = @unsorted_timeline.sort { |y,x| x.created_at <=> y.created_at  }
  end


end
