class CreateBreweries < ActiveRecord::Migration
  def change
    create_table :breweries do |t|
      t.string :name, null: false
      t.integer :brewer_id, index: true
      t.string :location

      t.timestamps
    end
  end
end
