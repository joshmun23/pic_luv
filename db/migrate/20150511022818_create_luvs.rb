class CreateLuvs < ActiveRecord::Migration
  def change
    create_table :luvs do |t|
      t.boolean :choice
      t.integer :user_id, unique: true
      t.timestamps
    end
  end
end
