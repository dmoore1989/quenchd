class CheckIn < ActiveRecord::Base

  validates :user_id, :beer_id, :rating, presence: true
  validates :rating, numericality: {greater_than_or_equal_to: 0.0}
  validates :rating, numericality: {less_than_or_equal_to: 5.0}
  validates :review, length: {maximum: 140}

  belongs_to :beer
  belongs_to :user
  has_many :comments


end
