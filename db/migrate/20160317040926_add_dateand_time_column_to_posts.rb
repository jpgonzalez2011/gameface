class AddDateandTimeColumnToPosts < ActiveRecord::Migration
  def up
    add_column :posts, :date_and_time, :string
    Post.find_each do |post|
      post.date_and_time = post.date_and_time_method
      post.save!
    end
  end

  def down
    remove_column :posts, :date_and_time
  end
end
