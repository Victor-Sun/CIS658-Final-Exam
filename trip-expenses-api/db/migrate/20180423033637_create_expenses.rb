class CreateExpenses < ActiveRecord::Migration
  def change
    create_table :expenses do |t|
      t.integer :expense
      t.string :reason

      t.timestamps
    end
  end
end
