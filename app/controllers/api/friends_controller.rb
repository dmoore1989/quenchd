class Api::FriendsController < ApplicationController
  def create
    Friend.create(user_id: current_user.id, friend_id: params[:friend][:id])
    Friend.create(friend_id: current_user.id, user_id: params[:friend][:id])
  end

  def destroy
    Friend.destroy(user_id: current_user.id, friend_id: params[:friend][:id])
    Friend.destroy(friend_id: current_user.id, user_id: params[:friend][:id])
  end
end
