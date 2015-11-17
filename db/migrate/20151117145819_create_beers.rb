class CreateBeers < ActiveRecord::Migration
  def change
    create_table :beers do |t|
      t.string :name, null: false
      t.float :abv
      t.float :ibu
      t.string :style, null: false
      t.text :description
      t.integer :brewery_id, null: false, index: true

      t.timestamps
    end
  end
end
