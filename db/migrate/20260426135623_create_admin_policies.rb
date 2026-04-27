class CreateAdminPolicies < ActiveRecord::Migration[8.1]
  def change
    create_table :admin_policies do |t|
      t.timestamps
    end
  end
end
