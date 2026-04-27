class CreateAdminFilters < ActiveRecord::Migration[8.1]
  def change
    create_table :admin_filters do |t|
      t.timestamps
    end
  end
end
