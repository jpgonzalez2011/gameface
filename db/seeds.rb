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
  Friendship.create!(received_friend: User.find_by(username: "mario"), requested_friend: User.find_by(username: "#{user.username}"), confirmed: true, rating: 0)
end

peach_friends = ["luigi", "zelda", "toad", "yoshi", "link", "laracroft", "samus", "kirby"]

peach_friends.each do |friend|
  Friendship.create!(received_friend: User.find_by(username: "peach"), requested_friend: User.find_by(username: friend), confirmed: true, rating: [1,2,3].sample)
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

photo1 = Photo.create!(uploader_id: User.find_by(username: "toad").id, image: File.new("#{Rails.root}/app/assets/images/seed_photos/Toad1.jpg"))
post1 = Post.create!(poster_id: User.find_by(username: "ganondorf").id, target_id: User.find_by(username: "bowser").id, content: "Where did you get those blocks that drop down on people? I need some for my castle.")
photo2 = Photo.create!(uploader_id: User.find_by(username: "toad").id, image: File.new("#{Rails.root}/app/assets/images/seed_photos/Toad2.jpg"))
post2 = Post.create!(poster_id: User.find_by(username: "luigi").id, target_id: User.find_by(username: "mario").id, content: "Hey bro! I finally joined GameFaces! This thing is awesome! Whhhaaaaaa!!!!")
photo3 = Photo.create!(uploader_id: User.find_by(username: "toad").id, image: File.new("#{Rails.root}/app/assets/images/seed_photos/Toad3.jpg"))
post3 = Post.create!(poster_id: User.find_by(username: "peach").id, target_id: User.find_by(username: "laracroft").id, content: "Awesome cover photo!.")
post4 = Post.create!(poster_id: User.find_by(username: "link").id, target_id: User.find_by(username: "zelda").id, content: "Hey, do you want to go to Gerudo Valley? I hear they have awesome music.")
comment1 = Comment.create!(commenter_id: User.find_by(username: "zelda").id, commentable_id: post4.id, commentable_type: "Post", content: "Sure! Can I bring my friend Sheik?")
photo5 = Photo.create!(uploader_id: User.find_by(username: "luigi").id, image: File.new("#{Rails.root}/app/assets/images/seed_photos/Luigi1.png"))
photo6 = Photo.create!(uploader_id: User.find_by(username: "kirby").id, image: File.new("#{Rails.root}/app/assets/images/seed_photos/Kirby1.gif"))
post5 = Post.create!(poster_id: User.find_by(username: "tetrisline").id, target_id: User.find_by(username: "mario").id, content: "Why won't more people be my friend?!")
post6 = Post.create!(poster_id: User.find_by(username: "mario").id, target_id: User.find_by(username: "bowser").id, content: "Your name is Bowser Koopa? So its King Bowser Koopa? I guess that works. How have you been?")
comment2 = Comment.create!(commenter_id: User.find_by(username: "peach").id, commentable_id: post6.id, commentable_type: "Post", content: "Mario! What the hell? You're friends with Bowser?!")
comment3 = Comment.create!(commenter_id: User.find_by(username: "mario").id, commentable_id: post6.id, commentable_type: "Post", content: "What? Why shouldn't we be friends?")
comment4 = Comment.create!(commenter_id: User.find_by(username: "peach").id, commentable_id: post6.id, commentable_type: "Post", content: "Maybe because he's kidnapped me multiple times?! Or that he wants to take over Mushroom Kingdom?!")
comment5 = Comment.create!(commenter_id: User.find_by(username: "mario").id, commentable_id: post6.id, commentable_type: "Post", content: "I guess this is a bad time to tell you that I planned a doubles tennis match for us with him and a goomba..")
photo4 = Photo.create!(uploader_id: User.find_by(username: "kingboo").id, image: File.new("#{Rails.root}/app/assets/images/seed_photos/KingBoo1.png"))


ProfilePicture.destroy_all
CoverPhoto.destroy_all
User.all.each do |user|
CoverPhoto.create!(user_id: user.id, image: File.new("#{Rails.root}/app/assets/images/cover_photos/#{user.username}.jpg"))
ProfilePicture.create!(user_id: user.id, image: File.new("#{Rails.root}/app/assets/images/profile_pictures/#{user.username}.jpg"))
end
