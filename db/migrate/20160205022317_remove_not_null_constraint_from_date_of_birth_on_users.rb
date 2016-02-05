class RemoveNotNullConstraintFromDateOfBirthOnUsers < ActiveRecord::Migration
  def change
    change_column :users, :date_of_birth, :date, :null => true
  end
end
