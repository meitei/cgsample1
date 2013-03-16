class ChangeDelFlgTypeToKokyakus < ActiveRecord::Migration
  def up
  	change_column(:kokyakus, :delFlg, :integer, :null => false, :default => 0)
  end

  def down
  	change_column(:kokyakus, :delFlg, :tinyint, :null => false, :default => 0)
  end
end
