class ChangeColumnToKokyakus < ActiveRecord::Migration
  def up
    remove_column :kokyakus, :tanjoDt
    add_column :kokyakus, :tanjoGengo, :integer
    add_column :kokyakus, :tanjoYear, :integer
    add_column :kokyakus, :tanjoMonth, :integer
    add_column :kokyakus, :tanjoDay, :integer
  end

  def down
    add_column :kokyakus, :tanjoDt, :date
    remove_column :kokyakus, :tanjoGengo
    remove_column :kokyakus, :tanjoYear
    remove_column :kokyakus, :tanjoMonth
    remove_column :kokyakus, :tanjoDay
  end
end
