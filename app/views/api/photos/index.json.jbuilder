json.photos(@photos) do |photo|
  json.id photo.id
  json.uploader_id photo.uploader_id
  json.uploader_name photo.uploader.full_name
  json.medium_url photo.medium_size_url
  json.full_url photo.full_size_url
  json.thumb_url photo.thumb_size_url
  json.date_and_time photo.created_at
  json.comments(photo.comments) do |comment|
    json.id comment.id
    json.commenter_name comment.commenter.full_name
    json.commenter_id comment.commenter.id
    json.thumbnail comment.commenter.profile_picture.image.url(:thumb)
    json.date_and_time comment.created_at
    json.content comment.content
  end
end
