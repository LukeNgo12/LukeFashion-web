class CreateAdminPaymentMethods < ActiveRecord::Migration[8.1]
  def change
    create_table :admin_payment_methods do |t|
      t.string "type"
      t.string "name"
      t.text "description"
      t.boolean "active", default: true

      t.string "display_on", default: "both"
      t.boolean "auto_capture"
      t.text "preferences"
      t.integer "position", default: 0
      t.index ["id", "type"], name: "index_spree_payment_methods_on_id_and_type"
      t.timestamps
    end
  end
end
