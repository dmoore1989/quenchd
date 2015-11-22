class CreateVenues < ActiveRecord::Migration
  def change
    create_table :venues do |t|
      t.string :name, null: false
      t.integer :owner_id, index: true
      t.string :address, null: false

      t.timestamps
    end
  end
end
