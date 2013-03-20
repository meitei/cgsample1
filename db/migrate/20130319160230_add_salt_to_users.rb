class AddSaltToUsers < ActiveRecord::Migration
  def change
    add_column :users, :salt, :string, :default => nil
  end
end
