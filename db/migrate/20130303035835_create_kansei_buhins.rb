class CreateKanseiBuhins < ActiveRecord::Migration
  def change
    create_table :kansei_buhins , :primary_key => 'buhinCd' do |t|
      t.integer :buhinCd ,:null => false
      t.string :buhinNm,:null => false, :limit => 50
      t.string :katashikiCd
      t.string :katashikiNm, :limit => 50
      t.integer :kakaku,:null => false
      t.string :shiyoBuhin, :limit => 50
      t.text :biko, :limit => 200
      t.integer :koshinshaId,:null => false
      t.integer :torokushaId,:null => false

      t.timestamps
    end
  end
end
