class CreateSessions < ActiveRecord::Migration
  def change
    create_table :sessions do |t|
      t.string :session_token, null: false
      t.integer :user_id, null: false

      t.timestamps
    end

    add_index :sessions, :session_token
  end
end
