json.id @comment.id
json.commenter @comment.commenter
json.commenter_name @comment.commenter.full_name
json.commenter_id @comment.commenter.id
json.thumbnail @comment.commenter.profile_picture.image.url(:thumb)
json.date_and_time @comment.created_at
json.content @comment.content
json.commentable_id @comment.commentable_id
json.commentable_type @comment.commentable_type
if @comment.commentable_type == "Post"
  json.comment_target @comment.commentable.poster
else
  json.comment_target @comment.commentable.uploader
end
