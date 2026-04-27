class CreateAdminCountries < ActiveRecord::Migration[8.1]
  def change
    create_table :admin_countries do |t|
      t.string "iso_name"
      t.string "iso", null: false
      t.string "iso3", null: false
      t.string "name"
      t.integer "numcode"
      t.boolean "states_required", default: false
      t.boolean "zipcode_required", default: true
      t.index ["iso_name"], name: "index_spree_countries_on_iso_name", unique: true
      t.index ["name"], name: "index_spree_countries_on_name", unique: true
      t.index ["iso"], name: "index_spree_countries_on_iso", unique: true
      t.index ["iso3"], name: "index_spree_countries_on_iso3", unique: true
      t.timestamps
    end
  end
end
