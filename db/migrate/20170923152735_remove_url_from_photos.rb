class RemoveUrlFromPhotos < ActiveRecord::Migration[5.0]
  def change
    remove_column :photos, :url, :string
    remove_column :photos, :alt_text, :string
  end
end
