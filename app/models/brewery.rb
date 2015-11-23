class Brewery < ActiveRecord::Base
  validates :name, presence: true

  has_many :beers
  has_many :check_ins, through: :beers, source: :check_ins
  belongs_to (
    :brewer,
    class_name: "User",
    foreign_key: :brewer_id
  )

  has_many :likes, as: :likeable
  has_many :user_likes, through: :likes, source: :liker
end
