Checkin < ActiveRecord::Base

validates :user_id, :beer_id, :rating, presence: true
validates :rating, numericall: {greater_than_or_equal_to: 0.0}
validates :rating, numericall: {less_than_or_equal_to: 5.0}
