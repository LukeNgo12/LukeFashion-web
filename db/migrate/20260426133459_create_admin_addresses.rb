class CreateAdminAddresses < ActiveRecord::Migration[8.1]
  def change
    create_table :admin_addresses do |t|
      t.string "firstname"
      t.string "lastname"
      t.string "address1"
      t.string "address2"
      t.string "city"
      t.string "zipcode"
      t.string "phone"
      t.string "state_name"
      t.string "alternative_phone"
      t.string "company"
      t.bigint "state_id"
      t.bigint "country_id"
      t.bigint "user_id"
      t.datetime "deleted_at"
      t.string "label"
      t.index ["country_id"], name: "index_spree_addresses_on_country_id"
      t.index ["deleted_at"], name: "index_spree_addresses_on_deleted_at"
      t.index ["firstname"], name: "index_addresses_on_firstname"
      t.index ["lastname"], name: "index_addresses_on_lastname"
      t.index ["state_id"], name: "index_spree_addresses_on_state_id"
      t.index ["user_id"], name: "index_spree_addresses_on_user_id"
      t.timestamps
    end
  end
end
