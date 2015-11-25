class CreateFriendRequests < ActiveRecord::Migration
  def change
    create_table :friend_requests do |t|
      t.integer :requester_id, index: true, null: false
      t.integer :approver_id, index: true, null: false

      t.timestamps
    end
  end
end
