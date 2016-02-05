class AddRatingColumnToFriendships < ActiveRecord::Migration
  def change
    add_column :friendships, :rating, :integer, default: 0, null: false
  end
end
