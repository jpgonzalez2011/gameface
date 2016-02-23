class User < ActiveRecord::Base

  include PgSearch
  multisearchable :against => [:username, :fname, :lname]
  pg_search_scope :whose_name_starts_with,
                  :against => [:username, :fname, :lname],
                  :using => {
                    :tsearch => {:prefix => true}
                  }

  validates :username, presence: true, uniqueness: true;
  validates :password_digest, :session_token,
            :fname, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  after_commit :ensure_cover_photo, on: :create

  has_many(
    :photos,
    primary_key: :id,
    foreign_key: :uploader_id,
    class_name: "Photo"
  )

  has_many(
    :posted_posts,
    foreign_key: :poster_id,
    primary_key: :id,
    class_name: "Post"
  )

  has_many(
    :targeted_posts,
    foreign_key: :target_id,
    primary_key: :id,
    class_name: "Post"
  )

  has_many(
    :requested_friendships,
    primary_key: :id,
    foreign_key: :received_friend,
    class_name: "Friendship"
  )

  has_many(
    :received_friendships,
    primary_key: :id,
    foreign_key: :requested_friend,
    class_name: "Friendship"
  )

  has_one(
    :profile_picture,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: "ProfilePicture"
  )

  has_one(
    :cover_photo,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: "CoverPhoto"
  )

  attr_reader :password

  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    if user && user.is_password?(password)
      return user
    else
      return nil
    end
  end

  def self.find_or_create_by_auth_hash(auth_hash)
    provider = auth_hash[:provider]
    uid = auth_hash[:uid]

    user = User.find_by(provider: provider, uid: uid)

    return user if user

    User.create(
      provider: provider,
      uid: uid,
      username: auth_hash[:info][:name],
      fname: auth_hash[:info][:name].split(" ")[0],
      lname: auth_hash[:info][:name].split(" ")[1], #come back to this to make it robust for full live push
      password: SecureRandom::urlsafe_base64
    )
  end

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def full_name
    name = self.fname
    if self.lname
      name = name + " " + self.lname
    end
    name
  end

  def friends
    requested_friendships = self.requested_friendships.includes(requested_friend: :profile_picture).where(confirmed: true).to_a
    received_friendships = self.received_friendships.includes(received_friend: :profile_picture).where(confirmed: true).to_a
    all_friendships = requested_friendships + received_friendships
    sorted_friendships = all_friendships.sort { |x,y| y[:rating] <=> x[:rating] }
    all_friends = sorted_friendships.map do |friendship|
      if friendship.received_friend.id == self.id
        friendship.requested_friend
      else
        friendship.received_friend
      end
    end
    all_friends
  end

  private

  def ensure_cover_photo
    ProfilePicture.create!(user_id: self.id, image: File.new("#{Rails.root}/app/assets/images/profile_pictures/default.png"))
    CoverPhoto.create!(user_id: self.id, image: File.new("#{Rails.root}/app/assets/images/cover_photos/default.jpg"))
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64(16)
  end

end
