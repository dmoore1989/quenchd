class Comment < ActiveRecord::Base
  validates :checkin_id, :commenter_id, :body, presence: true
  validates :body, length: {maximum: 140}

  belongs_to :check_in
  belongs_to(
    :commenter,
    class_name: "User",
    foreign_key: :commenter_id,
    primary_key: :id
    )

end
