class CreateAdminOrders < ActiveRecord::Migration[8.1]
  def change
    create_table :admin_orders do |t|
      t.string "number", limit: 32
      t.decimal "item_total", precision: 10, scale: 2, default: "0.0", null: false
      t.decimal "total", precision: 10, scale: 2, default: "0.0", null: false
      t.string "state"
      t.decimal "adjustment_total", precision: 10, scale: 2, default: "0.0", null: false
      t.bigint "user_id"
      t.datetime "completed_at"
      t.bigint "bill_address_id"
      t.bigint "ship_address_id"
      t.decimal "payment_total", precision: 10, scale: 2, default: "0.0"
      t.string "shipment_state"
      t.string "payment_state"
      t.string "email"
      t.text "special_instructions"

      t.string "currency"
      t.string "last_ip_address"
      t.bigint "created_by_id"
      t.decimal "shipment_total", precision: 10, scale: 2, default: "0.0", null: false
      t.decimal "additional_tax_total", precision: 10, scale: 2, default: "0.0"
      t.decimal "promo_total", precision: 10, scale: 2, default: "0.0"
      t.string "channel", default: "spree"
      t.decimal "included_tax_total", precision: 10, scale: 2, default: "0.0", null: false
      t.integer "item_count", default: 0
      t.bigint "approver_id"
      t.datetime "approved_at"
      t.boolean "confirmation_delivered", default: false
      t.boolean "considered_risky", default: false
      t.string "token"
      t.datetime "canceled_at"
      t.bigint "canceler_id"
      t.bigint "store_id"
      t.integer "state_lock_version", default: 0, null: false
      t.decimal "taxable_adjustment_total", precision: 10, scale: 2, default: "0.0", null: false
      t.decimal "non_taxable_adjustment_total", precision: 10, scale: 2, default: "0.0", null: false
      t.boolean "store_owner_notification_delivered"
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
      t.timestamps
    end
  end
end
