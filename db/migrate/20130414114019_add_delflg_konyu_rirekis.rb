class AddDelflgKonyuRirekis < ActiveRecord::Migration
  def up
    add_column :konyu_rirekis, :delFlg, :integer, :null => false, :default => 0
  end

  def down
    remove_column :konyu_rirekis, :delFlg
  end
end
