class ProfilePicture < ActiveRecord::Base
  validates :user_id, presence: true, uniqueness: true

  has_attached_file :image,
                    styles: {
                      medium: "172x172#",
                      small: "100x100#",
                      thumb: "30x30#"
                    }, default_url: "/images/:style/missing.png",
                    convert_options: {
                      thumb: "-quality 75 -strip",
                      small: "-quality 75 -strip",
                      medium: "-quality 75 -strip"
                    }
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

end
