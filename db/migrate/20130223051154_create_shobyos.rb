class CreateShobyos < ActiveRecord::Migration
  def change
    create_table :shobyos, :primary_key => 'shobyoCd' do |t|
      t.integer :shobyoCd, :null => false
      t.string :shobyoNm, :null => false, :limit => 50
      t.string :shobyoNmKana, :null => false, :limit => 50
      t.string :icd10Cd, :limit => 50
      t.date :shusaiDt
      t.date :haishiDt
      t.integer :koshinshaId, :null => false
      t.integer :torokushaId, :null => false

      t.timestamps
    end
  end
end
