class EditDobColumnToUsers < ActiveRecord::Migration
  def change
    change_column :users, :dob, :date, null:false
  end
end
