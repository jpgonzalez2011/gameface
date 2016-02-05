# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.destroy_all
CoverPhoto.destroy_all
ProfilePicture.destroy_all

User.create!(
  username: "mario", password: "password",
  fname: "Mario", lname: "Mario", date_of_birth: "09/07/1981",
  occupation: "Plumber", description: "It's a me! Mario! Plumber and Hero of
  the Mushroom Kingdom!"
)
User.create!(
  username: "luigi", password: "luigimansion",
  fname: "Luigi", lname: "Mario", date_of_birth: "14/7/1983", first_log_in: false
)
User.create!(
  username: "link", password: "ocarina",
  fname: "Link", lname: "", date_of_birth: "21/2/1986", first_log_in: false
)
User.create!(
  username: "zelda", password: "hyrule",
  fname: "Princess", lname: "Zelda", date_of_birth: "21/2/1986", first_log_in: false
)
User.create!(
  username: "bowser", password: "koopas",
  fname: "Bowser", lname: "Koopa", date_of_birth: "13/9/1985", first_log_in: false
)
User.create!(
  username: "ganondorf", password: "triforce",
  fname: "Ganondorf", lname: "Dragmire", date_of_birth: "21/11/1998", first_log_in: false
)
User.create!(
  username: "solidsnake", password: "metalgear",
  fname: "Iroquois", lname: "Pliskin", date_of_birth: "07/07/1987", first_log_in: false
)
User.create!(
  username: "peach", password: "toadstool",
  fname: "Peach", lname: "Toadstool", date_of_birth: "13/9/1985", first_log_in: false
)
User.create!(
  username: "toad", password: "supertoad",
  fname: "Toad", lname: "", date_of_birth: "9/10/1988", first_log_in: false
)
User.create!(
  username: "ryu", password: "hadouken",
  fname: "Ryu", lname: "Hoshi", date_of_birth: "30/8/1987", first_log_in: false
)
User.create!(
  username: "ken", password: "shoryuken",
  fname: "Ken", lname: "Masters", date_of_birth: "09/07/1981", first_log_in: false
)
User.create!(
  username: "kirby", password: "password",
  fname: "Kirby", lname: "", date_of_birth: "27/4/1992", first_log_in: false
)
User.create!(
  username: "samus", password: "shoryuken",
  fname: "Samus", lname: "Aran", date_of_birth: "6/8/1988", first_log_in: false
)
User.create!(
  username: "pacman", password: "password",
  fname: "Pacman", lname: "", date_of_birth: "22/5/1980", first_log_in: false
)
User.create!(
  username: "mspacman", password: "password",
  fname: "Ms. Pacman", lname: "", date_of_birth: "13/1/1982", first_log_in: false
)
User.create!(
  username: "boo", password: "password",
  fname: "Boo", lname: "", date_of_birth: "23/10/1988", first_log_in: false
)
User.create!(
  username: "yoshi", password: "password",
  fname: "Yoshi", lname: "", date_of_birth: "21/11/1991", first_log_in: false
)
User.create!(
  username: "kingboo", password: "password",
  fname: "King", lname: "Boo", date_of_birth: "14/9/2001", first_log_in: false
)
User.create!(
  username: "frogger", password: "password",
  fname: "Frogger", lname: "", date_of_birth: "5/6/1981", first_log_in: false
)
User.create!(
  username: "tetrisline", password: "password",
  fname: "Line", lname: "", date_of_birth: "6/6/1984", first_log_in: false
)
User.create!(
  username: "laracroft", password: "password",
  fname: "Lara", lname: "Croft", date_of_birth: "25/10/1996", first_log_in: false
)

User.all.each do |user|
  next if user.username == "mario"
  Friendship.create!(received_friend: User.find_by(username: "mario"), requested_friend: User.find_by(username: "#{user.username}"), confirmed: true)
end

peach_friends = ["luigi", "zelda", "toad", "yoshi", "link", "laracroft", "samus", "kirby"]

peach_friends.each do |friend|
  Friendship.create!(received_friend: User.find_by(username: "peach"), requested_friend: User.find_by(username: friend), confirmed: true, rating: 3)
end

link_friends = ["luigi", "zelda", "solidsnake", "frogger", "pacman", "boo", "ryu", "ken", "toad"]

link_friends.each do |friend|
  Friendship.create!(received_friend: User.find_by(username: "link"), requested_friend: User.find_by(username: friend), confirmed: true, rating: 3)
end

toad_friends = ["luigi", "kingboo", "boo", "yoshi", "kirby", "samus", "ryu", "ken", "zelda"]

toad_friends.each do |friend|
  Friendship.create!(received_friend: User.find_by(username: "toad"), requested_friend: User.find_by(username: friend), confirmed: true, rating: 3)
end

ganondorf_friends = ["kingboo", "boo", "bowser", "solidsnake", "frogger", "pacman", "mspacman", "laracroft", "samus"]

ganondorf_friends.each do |friend|
  Friendship.create!(received_friend: User.find_by(username: "ganondorf"), requested_friend: User.find_by(username: friend), confirmed: true, rating: 3)
end



User.all.each do |user|
CoverPhoto.create!(user_id: user.id, image: File.new("#{Rails.root}/app/assets/images/cover_photos/#{user.username}.jpg"))
ProfilePicture.create!(user_id: user.id, image: File.new("#{Rails.root}/app/assets/images/profile_pictures/#{user.username}.jpg"))
end
