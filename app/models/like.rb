class Like < ActiveRecord::Base
  validates :liker_id, :likeable_id, :likeable_type, presence: true
  validates_uniqueness_of :liker_id, scope: [:likeable_id, :likeable_type]

  belongs_to :likeable, polymorphic: true
  belongs_to(
    :liker,
    class_name: "User",
    foreign_key: :liker_id
    )
end
