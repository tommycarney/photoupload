class CreatePhotos < ActiveRecord::Migration[5.0]
  def change
    create_table :photos do |t|
      t.string :url
      t.string :alt_text

      t.timestamps
    end
  end
end
