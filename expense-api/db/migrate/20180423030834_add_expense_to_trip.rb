class AddExpenseToTrip < ActiveRecord::Migration
  def change
    add_reference :trips, :expense, index: true
  end
end
