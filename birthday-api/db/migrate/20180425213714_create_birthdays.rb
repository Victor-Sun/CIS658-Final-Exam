class CreateBirthdays < ActiveRecord::Migration
  def change
    create_table :birthdays do |t|
      t.string :name
      t.date :date

      t.timestamps
    end
  end
end
