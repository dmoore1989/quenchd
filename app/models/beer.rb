class Beer < ActiveRecord::Base

  validates :name, :style, :brewery_id, presence: true

end
