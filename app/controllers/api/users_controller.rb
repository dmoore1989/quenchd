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

  def search
    @users = User_search_by_username_and_email(params[:query])
    render :search
  end

  def sidebar
    @user= User.includes(:approvals).find(params[:id])

    render :sidebar
  end
end
