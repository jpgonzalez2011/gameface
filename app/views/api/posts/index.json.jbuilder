target_full_name = @user.full_name

json.posts(@posts) do |post|
  json.id post.id
  json.target_name target_full_name
  json.poster_name post.poster.full_name
  json.poster_thumb_url post.poster.profile_picture.image.url(:thumb)
  json.poster_id post.poster_id
  json.target_id @user.id
  json.content post.content
  json.date_and_time post.created_at
  json.comments(post.comments) do |comment|
    json.id comment.id
    json.commenter_name comment.commenter.full_name
    json.commenter_id comment.commenter.id
    json.thumbnail comment.commenter.profile_picture.image.url(:thumb)
    json.date_and_time comment.created_at
    json.content comment.content
  end
end
