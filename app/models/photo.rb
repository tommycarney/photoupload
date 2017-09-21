class Photo < ApplicationRecord
  has_attached_file :image,
                    style: { thumb: "100x100"},
                    default_url: "/images/:style/missing.png",
                    storage: :s3,
                    s3_credentials: Proc.new { |a| a.instance.s3_credentials }

  validates_attachment_content_type :image, content_type: /\image\/.*\z/

def s3_credentials
  {bucket: ENV['S3_BUCKET'], access_key_id: ENV['AWS_SECRET_ACCESS_KEY'], secret_access_key: ENV['AWS_ACCESS_KEY_ID']}
end


end
