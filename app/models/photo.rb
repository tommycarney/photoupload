class Photo < ApplicationRecord
  has_attached_file :image,
                    style: { thumb: "100x100"},
                    default_url: "/images/:style/missing.png",
                    storage: :s3

  validates_attachment_content_type :image, content_type: /\image\/.*\z/

end
