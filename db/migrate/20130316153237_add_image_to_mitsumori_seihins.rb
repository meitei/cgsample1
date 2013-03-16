class AddImageToMitsumoriSeihins < ActiveRecord::Migration
  def change
    add_column :mitsumori_seihins, :image, :binary,:after => 'kin', :limit => 1.megabyte
  end
end
