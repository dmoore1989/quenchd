module UsersHelper
  def friendship_status(user)
    if user == current_user
      "self"
    elsif user.friends.include?(current_user)
      "friend"
    elsif user.approvals.include?(current_user)
      "requested"
    elsif user.requests.include?(current_user)
      "pending"
    else
      "stranger"
    end
  end
end
