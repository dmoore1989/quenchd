class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.integer :checkin_id, null: false, index: true
      t.integer :commenter_id, null: false, index: true
      t.string :body, null: false

      t.timestamps
    end
  end
end
