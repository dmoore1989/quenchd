class CheckIn < ActiveRecord::Base
  has_attached_file :image, styles: {home_page: "480x215#"}, default_url: "missing-beer.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/


  validates :user_id, :beer_id, :rating, presence: true
  validates :rating, numericality: {greater_than_or_equal_to: 0.0}
  validates :rating, numericality: {less_than_or_equal_to: 5.0}
  validates :review, length: {maximum: 140}

  belongs_to :beer
  belongs_to :user
  has_one :brewery, through: :beer, source: :brewery
  has_many :comments
  belongs_to :venue
  has_many :likes, as: :likeable
  has_many :cheers, through: :likes, source: :liker

end
