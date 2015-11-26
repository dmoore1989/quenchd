module UsersHelper
  def friendship_status(user)
    if user == current_user
      "self"
    elsif !user.friends.where("user_id = ?", current_user.id).empty?
      "friend"
    elsif !user.approvals.where("requester_id = ?", current_user.id).empty?
      "requested"
    elsif !user.requests.where("approver_id =?", current_user.id).empty?
      "pending"
    else
      "stranger"
    end
  end
end
