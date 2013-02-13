class CreateByoins < ActiveRecord::Migration
  def change
    create_table :byoins, :primary_key => 'byoinCd' do |t|
      t.integer :byoinCd, :null => false
      t.string :byoinNm, :limit => 50, :null => false
      t.integer :koshinshaId, :null => false
      t.integer :torokushaId, :null => false

      t.timestamps
    end
  end
end
