class RemoveColumnMitsumoris < ActiveRecord::Migration
  def up
    remove_column :mitsumoris, :mitsumoriId
  end

  def down
    add_column :mitsumoris, :mitsumoriId, :integer
  end
end
