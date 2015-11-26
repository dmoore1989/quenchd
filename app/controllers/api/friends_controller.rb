class Api::FriendsController < ApplicationController
  def create
    @request = FriendRequest.find_by(
      approver_id: current_user.id,
      requester_id: params[:friend_id]
      )
    @request.destroy


    Friend.create(user_id: current_user.id, friend_id: params[:friend_id])
    Friend.create(friend_id: current_user.id, user_id: params[:friend_id])

    render json: {status: "friend"}
  end

  def destroy
    Friend.destroy(user_id: current_user.id, friend_id: params[:friend][:id])
    Friend.destroy(friend_id: current_user.id, user_id: params[:friend][:id])
  end
end
