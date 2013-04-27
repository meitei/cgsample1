class ChangeColumnSessions < ActiveRecord::Migration
  def change
    adapter = Rails.configuration.database_configuration[Rails.env]['adapter']
    if adapter == "mysql2" then
      change_column :sessions, :data, :text, :limit => 2.megabytes
    end
  end
end
