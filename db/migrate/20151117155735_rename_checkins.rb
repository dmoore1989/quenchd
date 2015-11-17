class RenameCheckins < ActiveRecord::Migration
  def change
    rename_table :checkins, :check_ins
  end
end
