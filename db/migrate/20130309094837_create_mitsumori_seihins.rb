class CreateMitsumoriSeihins < ActiveRecord::Migration
  def change
    create_table :mitsumori_seihins do |t|
      t.integer :mitsumoriNo,:null => false
      t.integer :seihinNo,:null => false
      t.integer :tanka,:null => false
      t.integer :suryo,:null => false
      t.float :tax,:null => false
      t.integer :kin,:null => false
      t.integer :koshinshaId,:null => false
      t.integer :torokushaId,:null => false

      t.timestamps
    end
  end
end
