json.results(@users) do |user|
  json.id user.id
  json.username user.username
  json.full_name user.full_name
  json.birthday user.date_of_birth
  json.occupation user.occupation
  json.description user.description
  json.cover_url user.cover_photo.image.url(:cover)
  json.profile_thumb_url user.profile_picture.image.url(:thumb)
  json.profile_small_url user.profile_picture.image.url(:small)
  json.profile_medium_url user.profile_picture.image.url(:medium)
end
