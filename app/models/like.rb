class Like < ActiveRecord::Base
  validates :liker_id, :likeable_id, :likeable_type, presence: true

  belongs_to :likeable, polymorphic: true
  belongs_to(
    :liker,
    class_name: "User",
    foreign_key: :liker_id
    )


end
