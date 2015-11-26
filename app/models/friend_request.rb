class FriendRequest < ActiveRecord::Base
  validates :requester_id, :approver_id, presence: true
  validates_uniqueness_of :requester_id, scope: :approver_id

  belongs_to(
    :requester,
    class_name: "User",
    foreign_key: :requester_id
    )
end
