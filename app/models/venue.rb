class Venue < ActiveRecord::Base
  validates :name, :address, presence: true;
  validates :address, uniqueness: true;

  has_many :check_ins
  
end
