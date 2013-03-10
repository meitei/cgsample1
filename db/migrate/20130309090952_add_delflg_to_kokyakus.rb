class AddDelflgToKokyakus < ActiveRecord::Migration
  def change
    add_column :kokyakus, :del_flg, :tinyint, :null => false, :default => 0
  end
end
