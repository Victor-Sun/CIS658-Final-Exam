class CreateTrips < ActiveRecord::Migration
  def change
    create_table :trips do |t|
      t.string :location
      t.string :who

      t.timestamps
    end
  end
end
