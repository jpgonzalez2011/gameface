class Like < ActiveRecord::Base

validates :liker_id, presence: true
belongs_to(
  :liker,
  foreign_key: :liker_id,
  primary_key: :id,
  class_name: "User"
)
belongs_to :likeable, polymorphic: true

end
