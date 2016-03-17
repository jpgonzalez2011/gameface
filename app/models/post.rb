class Post < ActiveRecord::Base
  validates :poster_id, :target_id, :content, presence: true

  belongs_to(
    :poster,
    foreign_key: :poster_id,
    primary_key: :id,
    class_name: "User"
  )

  belongs_to(
    :target,
    foreign_key: :target_id,
    primary_key: :id,
    class_name: "User"
  )

  has_many :comments, as: :commentable

  def poster_name
    self.poster.full_name
  end

  def target_name
    self.target.full_name
  end

  def date_and_time_method
    t = self.created_at.in_time_zone('Eastern Time (US & Canada)')
    t.strftime("%B") + " " + t.strftime("%d") + " " + t.strftime("%Y") + " " + t.strftime('%r')
  end

end
