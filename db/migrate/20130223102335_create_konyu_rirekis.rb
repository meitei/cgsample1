class CreateKonyuRirekis < ActiveRecord::Migration
  def change
    create_table :konyu_rirekis do |t|
      t.decimal :konyuRirekiId
      t.integer :kokyakuId
      t.integer :byoinCd
      t.string :ishiNm
      t.string :rigakuRyohoNm
      t.string :sagyoRyohoNm
      t.string :mitsumoriTantoEigyoCd
      t.date :mitsumoriDt
      t.integer :shubetsuCd
      t.integer :mitsumoriKomokuCd
      t.string :shohinNm
      t.string :sinsho
      t.integer :hokenShubetsuCd
      t.decimal :kin
      t.decimal :seikyuKin
      t.string :shohinSiyoBiko
      t.string :uketsukeSesakuTantoCd
      t.date :juchuDt
      t.string :kariAwaseTantoCd
      t.date :kariAwaseDt
      t.string :nohinTantoCd
      t.date :nohinDt
      t.date :kofuDt
      t.date :kannoDt
      t.date :nyukinDt
      t.date :oshiinDt
      t.date :kanryoDt
      t.integer :koshinshaId
      t.integer :torokushaId
      t.integer :koshinId

      t.timestamps
    end
  end
end
