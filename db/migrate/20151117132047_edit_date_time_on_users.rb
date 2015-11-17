class EditDateTimeOnUsers < ActiveRecord::Migration
  def change
    remove_column :users, :datetime, :datetime
  end
end
