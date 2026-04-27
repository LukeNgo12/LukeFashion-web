class CreateAdminWishlists < ActiveRecord::Migration[8.1]
  def change
    create_table :admin_wishlists, if_not_exists: true do |t|
      t.belongs_to :user
      t.belongs_to :store

      t.column :name, :string
      t.column :token, :string, null: false
      t.column :is_private, :boolean, default: true, null: false
      t.column :is_default, :boolean, default: false, null: false

      t.timestamps
    end
  end
end
