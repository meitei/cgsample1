class AddSessionsTable < ActiveRecord::Migration
  def change
    adapter = Rails.configuration.database_configuration[Rails.env]['adapter']
    if adapter == "postgresql" then
      create_table :sessions do |t|
        t.string :session_id, :null => false
        t.text :data
        t.text :data
        t.timestamps
      end
    else
      create_table :sessions do |t|
        t.string :session_id, :null => false
        t.text :data, :limit => 2.megabytes
        t.text :data
        t.timestamps
      end
    end

    add_index :sessions, :session_id
    add_index :sessions, :updated_at
  end
end
