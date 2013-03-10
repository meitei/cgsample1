class AddDelflgToKokyakus < ActiveRecord::Migration
  def change
    add_column :kokyakus, :delFlg, :tinyint, :null => false, :default => 0
  end
end
