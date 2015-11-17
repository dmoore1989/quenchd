class Beer < ActiveRecord::Base

  validates :name, :style, :brewery_id, presence: true
  has_many :checkins

end
