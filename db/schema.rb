# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[8.1].define(version: 2026_04_27_000431) do
  create_table "admin_addresses", charset: "utf8mb4", collation: "utf8mb4_general_ci", force: :cascade do |t|
    t.string "address1"
    t.string "address2"
    t.string "alternative_phone"
    t.string "city"
    t.string "company"
    t.bigint "country_id"
    t.datetime "created_at", null: false
    t.datetime "deleted_at"
    t.string "firstname"
    t.string "label"
    t.string "lastname"
    t.string "phone"
    t.bigint "state_id"
    t.string "state_name"
    t.datetime "updated_at", null: false
    t.bigint "user_id"
    t.string "zipcode"
    t.index ["country_id"], name: "index_spree_addresses_on_country_id"
    t.index ["deleted_at"], name: "index_spree_addresses_on_deleted_at"
    t.index ["firstname"], name: "index_addresses_on_firstname"
    t.index ["lastname"], name: "index_addresses_on_lastname"
    t.index ["state_id"], name: "index_spree_addresses_on_state_id"
    t.index ["user_id"], name: "index_spree_addresses_on_user_id"
  end

  create_table "admin_auths", charset: "utf8mb4", collation: "utf8mb4_general_ci", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "admin_carts", charset: "utf8mb4", collation: "utf8mb4_general_ci", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "admin_countries", charset: "utf8mb4", collation: "utf8mb4_general_ci", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.string "iso", null: false
    t.string "iso3", null: false
    t.string "iso_name"
    t.string "name"
    t.integer "numcode"
    t.boolean "states_required", default: false
    t.datetime "updated_at", null: false
    t.boolean "zipcode_required", default: true
    t.index ["iso"], name: "index_spree_countries_on_iso", unique: true
    t.index ["iso3"], name: "index_spree_countries_on_iso3", unique: true
    t.index ["iso_name"], name: "index_spree_countries_on_iso_name", unique: true
    t.index ["name"], name: "index_spree_countries_on_name", unique: true
  end

  create_table "admin_filters", charset: "utf8mb4", collation: "utf8mb4_general_ci", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "admin_orders", charset: "utf8mb4", collation: "utf8mb4_general_ci", force: :cascade do |t|
    t.decimal "additional_tax_total", precision: 10, scale: 2, default: "0.0"
    t.decimal "adjustment_total", precision: 10, scale: 2, default: "0.0", null: false
    t.datetime "approved_at"
    t.bigint "approver_id"
    t.bigint "bill_address_id"
    t.datetime "canceled_at"
    t.bigint "canceler_id"
    t.string "channel", default: "spree"
    t.datetime "completed_at"
    t.boolean "confirmation_delivered", default: false
    t.boolean "considered_risky", default: false
    t.datetime "created_at", null: false
    t.bigint "created_by_id"
    t.string "currency"
    t.string "email"
    t.decimal "included_tax_total", precision: 10, scale: 2, default: "0.0", null: false
    t.integer "item_count", default: 0
    t.decimal "item_total", precision: 10, scale: 2, default: "0.0", null: false
    t.string "last_ip_address"
    t.decimal "non_taxable_adjustment_total", precision: 10, scale: 2, default: "0.0", null: false
    t.string "number", limit: 32
    t.string "payment_state"
    t.decimal "payment_total", precision: 10, scale: 2, default: "0.0"
    t.decimal "promo_total", precision: 10, scale: 2, default: "0.0"
    t.bigint "ship_address_id"
    t.string "shipment_state"
    t.decimal "shipment_total", precision: 10, scale: 2, default: "0.0", null: false
    t.text "special_instructions"
    t.string "state"
    t.integer "state_lock_version", default: 0, null: false
    t.bigint "store_id"
    t.boolean "store_owner_notification_delivered"
    t.decimal "taxable_adjustment_total", precision: 10, scale: 2, default: "0.0", null: false
    t.string "token"
    t.decimal "total", precision: 10, scale: 2, default: "0.0", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id"
    t.index ["approver_id"], name: "index_spree_orders_on_approver_id"
    t.index ["bill_address_id"], name: "index_spree_orders_on_bill_address_id"
    t.index ["canceler_id"], name: "index_spree_orders_on_canceler_id"
    t.index ["completed_at"], name: "index_spree_orders_on_completed_at"
    t.index ["confirmation_delivered"], name: "index_spree_orders_on_confirmation_delivered"
    t.index ["considered_risky"], name: "index_spree_orders_on_considered_risky"
    t.index ["created_by_id"], name: "index_spree_orders_on_created_by_id"
    t.index ["number"], name: "index_spree_orders_on_number", unique: true
    t.index ["ship_address_id"], name: "index_spree_orders_on_ship_address_id"
    t.index ["store_id"], name: "index_spree_orders_on_store_id"
    t.index ["token"], name: "index_spree_orders_on_token"
    t.index ["user_id", "created_by_id"], name: "index_spree_orders_on_user_id_and_created_by_id"
  end

  create_table "admin_payment_methods", charset: "utf8mb4", collation: "utf8mb4_general_ci", force: :cascade do |t|
    t.boolean "active", default: true
    t.boolean "auto_capture"
    t.datetime "created_at", null: false
    t.text "description"
    t.string "display_on", default: "both"
    t.string "name"
    t.integer "position", default: 0
    t.text "preferences"
    t.string "type"
    t.datetime "updated_at", null: false
    t.index ["id", "type"], name: "index_spree_payment_methods_on_id_and_type"
  end

  create_table "admin_policies", charset: "utf8mb4", collation: "utf8mb4_general_ci", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "admin_searches", charset: "utf8mb4", collation: "utf8mb4_general_ci", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "admin_wishlists", charset: "utf8mb4", collation: "utf8mb4_general_ci", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "sessions", charset: "utf8mb4", collation: "utf8mb4_general_ci", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.string "ip_address"
    t.datetime "updated_at", null: false
    t.string "user_agent"
    t.bigint "user_id", null: false
    t.index ["user_id"], name: "index_sessions_on_user_id"
  end

  create_table "users", charset: "utf8mb4", collation: "utf8mb4_general_ci", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.string "email_address", null: false
    t.string "password_digest", null: false
    t.datetime "updated_at", null: false
    t.index ["email_address"], name: "index_users_on_email_address", unique: true
  end

  add_foreign_key "sessions", "users"
end
