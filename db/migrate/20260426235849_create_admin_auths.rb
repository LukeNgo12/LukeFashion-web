class CreateAdminAuths < ActiveRecord::Migration[8.1]
  def change
    create_table :admin_auths do |t|
      t.timestamps
    end
  end
end
