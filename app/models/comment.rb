class Comment < ActiveRecord::Base
  validates :checkin_id, :commenter_id, :body, presence: true
  validates :body, length: {maximum: 140}


end
