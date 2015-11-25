class Venue < ActiveRecord::Base
  has_attached_file :image, styles: {title: "98x98>"}, default_url: "missing-venue.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/


  validates :name, :address, presence: true;
  validates :address, uniqueness: true;
  include PgSearch
  multisearchable :against => :name



  has_many :check_ins
  has_many :likes, as: :likeable
  has_many :user_likes, through: :likes, source: :liker
end
