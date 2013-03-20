class AddCryptedPasswordToUsers < ActiveRecord::Migration
  def change
    add_column :users, :crypted_password, :string, :default => nil
  end
end
