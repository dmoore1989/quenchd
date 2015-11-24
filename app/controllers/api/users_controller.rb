class Api::UsersController < ApplicationController
  def show
    @user = User.includes(:check_ins).find(params[:id])
    @check_ins = @user
      .check_ins
      .includes(:comments, :beer, :brewery, :venue, :user, :likes)
      .order(created_at: :desc)
      .page(params[:page_number])
      .per(10)
    render :show
  end

end
