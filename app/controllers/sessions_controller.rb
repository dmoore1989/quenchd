class SessionsController < ApplicationController
  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

    if @user
      login(@user)
      redirect_to static_pages_home_url
    else
      flash[:errors] = ["Incorrect Username or Password"]
      render :new
    end
  end

  def destroy
    logout
    redirect_to static_pages_landing_url
  end
end
