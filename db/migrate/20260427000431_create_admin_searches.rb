class CreateAdminSearches < ActiveRecord::Migration[8.1]
  def change
    create_table :admin_searches do |t|
      t.timestamps
    end
  end
end
