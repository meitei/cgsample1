class CreateSeihins < ActiveRecord::Migration
  def change
    create_table :seihins, :primary_key => 'seihinId' do |t|
      t.integer :seihinId,:null => false
      t.string :bunruiCd,:null => false, :limit => 50
      t.string :bunruiNm, :limit => 50
      t.string :hinmeiCd,:null => false, :limit => 50
      t.string :hinmeiNm, :limit => 50
      t.string :katashikiCd,:null => false, :limit => 50
      t.string :katashikiNm,:limit => 50
      t.integer :koshinshaId,:null => false
      t.integer :torokushaId,:null => false
      t.timestamps
    end
  end
end
