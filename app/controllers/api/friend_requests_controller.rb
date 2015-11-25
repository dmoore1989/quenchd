class Api::FriendRequestsController < ApplicationController
  def create
    @request = FriendRequest.new(
      requester_id: current_user.id,
      approver_id: params[:request][:requester_id]
      )
    if @request.save
    end
  end

  def destroy
    FriendRequest.find(params[:id]).destroy

  end
end
