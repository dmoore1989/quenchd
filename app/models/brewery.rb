class Brewery < ActiveRecord::Base
  has_attached_file :image, styles: {title: "98x98#"}, default_url: "missing-brewery.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  validates :name, presence: true
  include PgSearch
  multisearchable :against => :name


  has_many :beers
  has_many :check_ins, through: :beers, source: :check_ins
  belongs_to(
    :brewer,
    class_name: "User",
    foreign_key: :brewer_id
  )

  has_many :likes, as: :likeable
  has_many :likers, through: :likes, source: :liker
  has_many :user_likes, through: :likes, source: :liker
end
