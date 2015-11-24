# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20151124190623) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "beers", force: :cascade do |t|
    t.string   "name",        null: false
    t.float    "abv"
    t.float    "ibu"
    t.string   "style",       null: false
    t.text     "description"
    t.integer  "brewery_id",  null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "beers", ["brewery_id"], name: "index_beers_on_brewery_id", using: :btree

  create_table "breweries", force: :cascade do |t|
    t.string   "name",       null: false
    t.integer  "brewer_id"
    t.string   "location"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "breweries", ["brewer_id"], name: "index_breweries_on_brewer_id", using: :btree

  create_table "check_ins", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "beer_id",    null: false
    t.integer  "venue_id"
    t.float    "rating",     null: false
    t.string   "review"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "check_ins", ["beer_id"], name: "index_check_ins_on_beer_id", using: :btree
  add_index "check_ins", ["user_id"], name: "index_check_ins_on_user_id", using: :btree
  add_index "check_ins", ["venue_id"], name: "index_check_ins_on_venue_id", using: :btree

  create_table "comments", force: :cascade do |t|
    t.integer  "check_in_id",  null: false
    t.integer  "commenter_id", null: false
    t.string   "body",         null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "comments", ["check_in_id"], name: "index_comments_on_check_in_id", using: :btree
  add_index "comments", ["commenter_id"], name: "index_comments_on_commenter_id", using: :btree

  create_table "likes", force: :cascade do |t|
    t.integer  "liker_id",      null: false
    t.integer  "likeable_id"
    t.string   "likeable_type"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "likes", ["likeable_type", "likeable_id"], name: "index_likes_on_likeable_type_and_likeable_id", using: :btree
  add_index "likes", ["liker_id"], name: "index_likes_on_liker_id", using: :btree

  create_table "pg_search_documents", force: :cascade do |t|
    t.text     "content"
    t.integer  "searchable_id"
    t.string   "searchable_type"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "pg_search_documents", ["searchable_type", "searchable_id"], name: "index_pg_search_documents_on_searchable_type_and_searchable_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.string   "location",        null: false
    t.string   "website"
    t.string   "about"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.date     "dob",             null: false
  end

  create_table "venues", force: :cascade do |t|
    t.string   "name",       null: false
    t.integer  "owner_id"
    t.string   "address",    null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "venues", ["owner_id"], name: "index_venues_on_owner_id", using: :btree

end
