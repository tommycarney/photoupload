class Photo < ApplicationRecord
  has_attached_file :image,
                    styles: { thumb: "100x100#"},
                    default_url: "/images/:style/missing.png",
                    storage: :s3

  validates_attachment_content_type :image, content_type: /\image\/.*\z/
  belongs_to :user

end
