class CreateKokyakus < ActiveRecord::Migration
  def change
    create_table :kokyakus, :primary_key => 'kokyakuId' do |t|
      t.integer :kokyakuId, :null => false
      t.string :kokyakuNm1, :limit => 50
      t.string :kokyakuNm2, :limit => 50
      t.string :kokyakuNmKana1, :limit => 50
      t.string :kokyakuNmKana2, :limit => 50
      t.integer :seibetsu
      t.date :tanjoDt
      t.string :postNo, :limit => 8
      t.string :address1, :limit => 100
      t.string :address2, :limit => 100
      t.string :tel1, :limit => 13
      t.string :tel2, :limit => 13
      t.string :fax, :limit => 13
      t.integer :shobyouCd1
      t.integer :shobyouCd2
      t.integer :shobyouCd3
      t.string :gakkoNm, :limit => 100
      t.string :biko, :limit => 200
      t.timestamp :koshinDt, :null => false
      t.integer :koshinshaId, :null => false
      t.timestamp :torokuDt, :null => false
      t.integer :torokushaId, :null => false
      t.integer :koshinId, :null => false

      t.timestamps
    end
  end
end
