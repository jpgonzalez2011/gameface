class Session < ActiveRecord::Base
  validates :session_token, :user_id, presence: true
  validates :session_token, uniqueness: true

  belongs_to(
    :user,
    foreign_key: :user_id,
    primary_key: :id,
    class_name: "User"
  )

end
