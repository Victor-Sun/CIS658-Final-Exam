class Birthday < ActiveRecord::Base
    validates :name, :date, presence: true
    
    belongs_to :category
end
