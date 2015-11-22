class Beer < ActiveRecord::Base

  validates :name, :style, :brewery_id, presence: true
  has_many :check_ins
  belongs_to :brewery

end
