class RemoveImageFromMitsumoriSeihins < ActiveRecord::Migration
  def up
    remove_column :mitsumori_seihins, :image
  end

  def down
    add_column :mitsumori_seihins, :image, :binary
  end
end
