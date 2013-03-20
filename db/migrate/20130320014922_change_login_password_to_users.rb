class ChangeLoginPasswordToUsers < ActiveRecord::Migration
  def up
  	change_column(:users, :loginPassword, :string, :null => true)
  end

  def down
  	change_column(:users, :loginPassword, :string, :null => false)
  end
end
