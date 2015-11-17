class EditCheckInIdOnComments < ActiveRecord::Migration
  def change
    rename_column :comments, :checkin_id, :check_in_id
  end
end
