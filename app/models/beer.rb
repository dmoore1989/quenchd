class Beer < ActiveRecord::Base
  include PgSearch
  multisearchable :against => :name


  validates :name, :style, :brewery_id, presence: true
  has_many :check_ins
  belongs_to :brewery
  has_many :likes, as: :likeable
  has_many :user_wish_lists, through: :likes, source: :liker
end
