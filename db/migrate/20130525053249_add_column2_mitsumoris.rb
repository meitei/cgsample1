class AddColumn2Mitsumoris < ActiveRecord::Migration

  def change
      add_column :mitsumoris, :COL7_8, :integer
  end

end
