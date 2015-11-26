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
    @friend1 = Friend.find_by(user_id: current_user.id, friend_id: params[:user_id])
    @friend2 =Friend.find_by(friend_id: current_user.id, user_id: params[:user_id])
    byebug
    if @friend1.destroy && @friend2.destroy
      byebug
      render json: {status: "stranger"}
    end
  end
end
