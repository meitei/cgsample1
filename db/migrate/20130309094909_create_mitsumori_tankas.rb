class CreateMitsumoriTankas < ActiveRecord::Migration
  def change

    create_table :mitsumori_tankas, :primary_key => 'seihinNo' do |t|
      t.string :seihinName, :limit => 40
      t.integer :tanka,:null => false
      t.float :tax,:null => false
      t.integer :buhinCd
      t.integer :koshinshaId,:null => false
      t.integer :torokushaId,:null => false

      t.timestamps
    end
  end
end
