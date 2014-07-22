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
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20140722051712) do

  create_table "contracts", :force => true do |t|
    t.string   "empno"
    t.string   "htype"
    t.string   "status"
    t.date     "cstart"
    t.date     "cend"
    t.date     "pstart"
    t.date     "pend"
    t.string   "nameiqama"
    t.string   "proiqama"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "educations", :force => true do |t|
    t.string   "empno"
    t.string   "edtype"
    t.string   "degyear"
    t.string   "deg"
    t.string   "special"
    t.boolean  "verified"
    t.string   "verby"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "employees", :force => true do |t|
    t.string   "empno"
    t.string   "first_name"
    t.string   "middle_name"
    t.string   "last_name"
    t.string   "gender"
    t.date     "dob"
    t.string   "passportno"
    t.date     "pidate"
    t.date     "pedate"
    t.string   "iqamano"
    t.date     "iqidate"
    t.date     "iqedate"
    t.string   "insuranceno"
    t.date     "iidate"
    t.date     "iedate"
    t.string   "visano"
    t.date     "vidate"
    t.date     "vedate"
    t.string   "Marstatus"
    t.string   "religion"
    t.string   "nationality"
    t.string   "civstatus"
    t.string   "designation"
    t.string   "department"
    t.string   "speciali"
    t.string   "exp"
    t.string   "email"
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
  end

  create_table "users", :force => true do |t|
    t.string   "name"
    t.string   "password_digest"
    t.datetime "created_at",      :null => false
    t.datetime "updated_at",      :null => false
  end

end
