class Beer < ActiveRecord::Base
  has_attached_file :image, styles: {title: "98x98>", thumb: "40x40>"}, default_url: "missing-beer.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  include PgSearch
  multisearchable :against => :name


  validates :name, :style, :brewery_id, presence: true
  has_many :check_ins
  belongs_to :brewery
  has_many :likes, as: :likeable
  has_many :user_wish_lists, through: :likes, source: :liker
end
