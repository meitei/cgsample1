class AddDelflgToKokyakus < ActiveRecord::Migration
  def change
    add_column :kokyakus, :delFlg, :integer, :null => false, :default => 0
  end
end
