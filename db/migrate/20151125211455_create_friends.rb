class CreateFriends < ActiveRecord::Migration
  def change
    create_table :friends do |t|
      t.integer :user_id, null: false, index: true
      t.integer :friend_id, null: false, index: true

      t.timestamps
    end
  end
end
