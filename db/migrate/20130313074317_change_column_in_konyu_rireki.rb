class ChangeColumnInKonyuRireki < ActiveRecord::Migration

  def change
    add_column :konyu_rirekis, :ishiNm1, :string
    add_column :konyu_rirekis, :ishiNm2, :string
    add_column :konyu_rirekis, :rigakuRyohoNm1, :string
    add_column :konyu_rirekis, :rigakuRyohoNm2, :string
    add_column :konyu_rirekis, :sagyoRyohoNm1, :string
    add_column :konyu_rirekis, :sagyoRyohoNm2, :string
    add_column :konyu_rirekis, :shubetsuKn, :integer
    add_column :konyu_rirekis, :seihinId, :integer
    add_column :konyu_rirekis, :hokenShubetsuCd1, :integer
    add_column :konyu_rirekis, :hokenShubetsuCd2, :integer
    add_column :konyu_rirekis, :kanseiImg, :binary, :limit => 1.megabyte
    add_column :konyu_rirekis, :kanseiTmbImg, :binary, :limit => 1.megabyte
    add_column :konyu_rirekis, :kanseiImgName, :string

    change_column :konyu_rirekis, :konyuRirekiId, :decimal, :precision => 11, :scale => 0

    rename_column :konyu_rirekis, :shohinSiyoBiko, :shohinShiyoBiko

    remove_column :konyu_rirekis, :ishiNm, :rigakuRyohoNm, :sagyoRyohoNm, :shubetsuCd, :mitsumoriKomokuCd, :sinsho, :hokenShubetsuCd, :koshinId
  end

  # def up
		# change_table :konyu_rirekis do |t|
		#   t.remove :ishiNm, :rigakuRyohoNm, :sagyoRyohoNm, :shubetsuCd, :mitsumoriKomokuCd, :sinsho, :hokenShubetsuCd, :koshinId
		# end
  # end

  # def down
		# change_table :konyu_rirekis do |t|
		#   t.string :ishiNm1
		#   t.string :ishiNm2
		#   t.string :rigakuRyohoNm1
		#   t.string :rigakuRyohoNm2
		#   t.string :sagyoRyohoNm1
		#   t.string :sagyoRyohoNm2
		#   t.integer :shubetsuKn
		#   t.integer :seihinCd
		#   t.integer :hokenShubetsuCd1
		#   t.integer :hokenShubetsuCd2
		# end
  # end
end
