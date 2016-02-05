class AddFirstLogInCheckToUsers < ActiveRecord::Migration
  def change
    add_column :users, :first_log_in, :boolean, default: true
  end
end
