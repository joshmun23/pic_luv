class CreatePicks < ActiveRecord::Migration
  def change
    create_table :picks do |t|
      t.float :distance_mi
      t.integer :common_friend_count
      t.integer :common_likes
      t.string :tinder_id, unique: true
      t.string :bio
      t.datetime :birth_date
      t.string :name
    end
  end
end
