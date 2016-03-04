json.friends(@friends) do |friend|
  json.user_id @user_id
  json.id friend.id
  json.username friend.username
  json.full_name friend.full_name
  json.birthday friend.date_of_birth
  json.occupation friend.occupation
  json.description friend.description
  json.profile_small_url friend.profile_picture.image.url(:small)
end
