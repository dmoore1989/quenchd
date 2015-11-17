class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, null: false, unique: true
      t.string :email,  null: false, unique: true
      t.string :password_digest, null: false
      t.string :session_token, null: false, unique: true
      t.string :datetime, null: false
      t.string :location, null: false
      t.string :website
      t.string :about

      t.timestamps
    end
  end
end
