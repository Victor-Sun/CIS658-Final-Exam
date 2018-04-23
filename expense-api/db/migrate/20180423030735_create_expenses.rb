class CreateExpenses < ActiveRecord::Migration
  def change
    create_table :expenses do |t|
      t.integer :cost
      t.string :reason

      t.timestamps
    end
  end
end
