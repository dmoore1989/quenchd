class Venue < ActiveRecord::Base
  validates :name, :address, presence: true;
  validates :address, uniqueness: true;
  include PgSearch
  multisearchable :against => :name



  has_many :check_ins
  has_many :likes, as: :likeable
  has_many :user_likes, through: :likes, source: :liker
end
