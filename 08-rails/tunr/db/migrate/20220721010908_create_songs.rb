class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.text :title
      t.integer :album_id
      t.integer :artist_id

      t.timestamps
    end
  end
end
