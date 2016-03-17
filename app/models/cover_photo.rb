class CoverPhoto < ActiveRecord::Base
  validates :user_id, presence: true, uniqueness: true
  has_attached_file :image,
                    styles: {
                      cover: "848x315#"
                    },
                    convert_options: {
                      cover: "-quality 75 -strip"
                    },
                    default_url: "/images/:style/missing.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

end
