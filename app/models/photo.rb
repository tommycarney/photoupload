class Photo < ApplicationRecord
  has_attached_file :image,
                    styles: { thumb: "100x100#"},
                    default_url: "/images/:style/missing.png",
                    storage: :s3

  validates_attachment_content_type :image, content_type: /\image\/.*\z/
  belongs_to :user

  def self.photos_to_json(id)
    Photo.where(user_id: id).map {|p| {"url": p.image.url(:thumb), "id": p.id }}
  end

  def self.photo_to_json(args)
      return { "url": args[:photo].image.url(args[:size]), "id": args[:photo].id }
  end
end
