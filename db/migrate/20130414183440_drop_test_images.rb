class DropTestImages < ActiveRecord::Migration
  def up
    drop_table :test_images
  end

  def down
    create_table :test_images do |t|
      t.integer :mitsumoriNo,:null => false
      t.string :text
      t.binary :mainImage1, :limit => 1.megabyte
      t.binary :mainImage2, :limit => 1.megabyte
      t.binary :subImage1, :limit => 1.megabyte
      t.binary :subImage2, :limit => 1.megabyte
      t.binary :subImage3, :limit => 1.megabyte
      t.binary :subImage4, :limit => 1.megabyte
      
      t.timestamps
    end
  end
end
