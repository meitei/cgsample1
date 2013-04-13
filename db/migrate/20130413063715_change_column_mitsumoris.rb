class ChangeColumnMitsumoris < ActiveRecord::Migration
  def up
    remove_column :mitsumoris, :COL_23_1
    add_column :mitsumoris, :COL1_2, :integer
    add_column :mitsumoris, :COL23_1, :integer

  end

  def down
    remove_column :mitsumoris, :COL1_2
    remove_column :mitsumoris, :COL23_1
    add_column :mitsumoris, :COL_23_1, :integer
  end
end
