class DivideColumnToKokyakus < ActiveRecord::Migration
  def up
    remove_column :kokyakus, :kokyakuNm
    remove_column :kokyakus, :kokyakuNmKana
    add_column :kokyakus, :kokyakuNm1, :string, :limit => 50
    add_column :kokyakus, :kokyakuNm2, :string, :limit => 50
    add_column :kokyakus, :kokyakuNmKana1, :string, :limit => 50
    add_column :kokyakus, :kokyakuNmKana2, :string, :limit => 50

  end

  def down
    remove_column :kokyakus, :kokyakuNm1
    remove_column :kokyakus, :kokyakuNm2
    remove_column :kokyakus, :kokyakuNmKana1
    remove_column :kokyakus, :kokyakuNmKana2
    add_column :kokyakus, :kokyakuNm, :string, :limit => 100
    add_column :kokyakus, :kokyakuNmKana, :string, :limit => 100
  end
end
