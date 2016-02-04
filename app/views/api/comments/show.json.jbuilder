json.id @comment.id
json.commenter_name @comment.commenter.full_name
json.commenter_id @comment.commenter.id
json.thumbnail @comment.commenter.profile_picture.image.url(:thumb)
json.date_and_time @comment.date_and_time
json.content @comment.content
json.commentable_id @comment.commentable_id
json.commentable_type @comment.commentable_type
