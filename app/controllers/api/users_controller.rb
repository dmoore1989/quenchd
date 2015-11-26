class Api::UsersController < ApplicationController
  def show
    @user = User.includes(:check_ins, :friends).find(params[:id])
    @check_ins = @user
      .check_ins
      .includes({comments: [:commenter]}, :beer, :brewery, :venue, :user, :likes)
      .order(created_at: :desc)
      .page(params[:page_number])
      .per(10)
    render :show
  end

  def sidebar
    @user= User.includes( :friend_requests).find(params[:id])

    render :sidebar
  end
end
