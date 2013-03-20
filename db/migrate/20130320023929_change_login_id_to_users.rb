class ChangeLoginIdToUsers < ActiveRecord::Migration
  def up
  	rename_column(:users, :loginId, :username)
  	rename_column(:users, :shainId, :id)
  	remove_column(:users, :loginPassword)
  end

  def down
  	rename_column(:users, :username, :loginId)
  	rename_column(:users, :id, :shainId)
  	add_column :users, :loginPassword, :string, :limit => 50
  end
end
