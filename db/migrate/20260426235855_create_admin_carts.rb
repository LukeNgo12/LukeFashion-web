class CreateAdminCarts < ActiveRecord::Migration[8.1]
  def change
    create_table :admin_carts do |t|
      t.timestamps
    end
  end
end
