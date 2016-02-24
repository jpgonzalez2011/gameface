post = @post

json.id post.id
json.target_name post.target.full_name
json.poster_name post.poster.full_name
json.poster_thumb_url post.poster.profile_picture.image.url(:thumb)
json.poster_id post.poster_id
json.target_id post.target_id
json.content post.content
json.date_and_time post.date_and_time
json.comments(post.comments) do |comment|
  json.id comment.id
  json.commenter_name comment.commenter.full_name
  json.commenter_id comment.commenter.id
  json.thumbnail comment.commenter.profile_picture.image.url(:thumb)
  json.date_and_time comment.date_and_time
  json.content comment.content
end
