class Session < ActiveRecord::Base
  validates :session_token, :user_id, presence: true
  validates :session_token, uniqueness: true

  belongs_to(
    :user,
    foreign_key: :user_id,
    primary_key: :id,
    class_name: "User"
  )

  def set_token
    SecureRandom::urlsafe_base64(16)
  end

end
