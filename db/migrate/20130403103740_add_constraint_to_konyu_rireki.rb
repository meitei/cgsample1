class AddConstraintToKonyuRireki < ActiveRecord::Migration
  def change
    change_column :konyu_rirekis, :kokyakuId, :integer, :null => false
    change_column :konyu_rirekis, :mitsumoriTantoEigyoCd, :string, :limit => 10
    change_column :konyu_rirekis, :uketsukeSesakuTantoCd, :string, :limit => 10
    change_column :konyu_rirekis, :kariAwaseTantoCd, :string, :limit => 10
    change_column :konyu_rirekis, :nohinTantoCd, :string, :limit => 10
    change_column :konyu_rirekis, :nohinTantoCd, :string, :limit => 10
    change_column :konyu_rirekis, :shohinNm, :string, :limit => 100
    change_column :konyu_rirekis, :shohinShiyoBiko, :string, :limit => 200
    change_column :konyu_rirekis, :ishiNm1, :string, :limit => 50
    change_column :konyu_rirekis, :ishiNm2, :string, :limit => 50
    change_column :konyu_rirekis, :rigakuRyohoNm1, :string, :limit => 50
    change_column :konyu_rirekis, :rigakuRyohoNm2, :string, :limit => 50
    change_column :konyu_rirekis, :sagyoRyohoNm1, :string, :limit => 50
    change_column :konyu_rirekis, :sagyoRyohoNm2, :string, :limit => 50
    change_column :konyu_rirekis, :koshinshaId, :integer, :null => false
    change_column :konyu_rirekis, :torokushaId, :integer, :null => false
  end
end
