class Api::UsersController < ApplicationController
  def show
    @user = User.find_by(params[:id])
    render :show
  end

end
