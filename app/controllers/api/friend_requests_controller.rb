class Api::FriendRequestsController < ApplicationController
  def create
    @request = FriendRequest.new(
      requester_id: current_user.id,
      approver_id: params[:request]
      )
    if @request.save
      render json: {status: "requested", id: @request.id}
    end
  end

  def destroy
    @request = FriendRequest.find_by(
      requester_id: current_user.id,
      approver_id: params[:user_id]
      )
    if @request.destroy
      render json: {status: "stranger"}
    end

  end
end
