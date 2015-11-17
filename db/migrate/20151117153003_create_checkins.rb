class CreateCheckins < ActiveRecord::Migration
  def change
    create_table :checkins do |t|
      t.integer :user_id, null: false, index: true
      t.integer :beer_id, null: false, index: true
      t.integer :venue_id, index: true
      t.float :rating,  null: false
      t.string :review

      t.timestamps
    end
  end
end
