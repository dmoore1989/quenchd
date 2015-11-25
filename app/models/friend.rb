class Friend < ActiveRecord:Base
  validates :user_id, :friend_id, presence: true
  validates_uniqueness_of :user_id, scope: :friend_id

end
