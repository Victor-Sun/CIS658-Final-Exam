class AddCategoryToBirthday < ActiveRecord::Migration
  def change
    add_reference :birthdays, :category, index: true
  end
end
