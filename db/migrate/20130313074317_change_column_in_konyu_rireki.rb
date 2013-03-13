class ChangeColumnInKonyuRireki < ActiveRecord::Migration
  def up
		change_table :konyu_rirekis do |t|
		  t.remove :ishiNm, :rigakuRyohoNm, :sagyoRyohoNm, :shubetsuCd, :mitsumoriKomokuCd, :sinsho, :hokenShubetsuCd, :koshinId
		end
  end

  def down
		change_table :konyu_rirekis do |t|
		  t.string :ishiNm1
		  t.string :ishiNm2
		  t.string :rigakuRyohoNm1
		  t.string :rigakuRyohoNm2
		  t.string :sagyoRyohoNm1
		  t.string :sagyoRyohoNm2
		  t.integer :shubetsuKn
		  t.integer :seihinCd
		  t.integer :hokenShubetsuCd1
		  t.integer :hokenShubetsuCd2
		end
  end
end
