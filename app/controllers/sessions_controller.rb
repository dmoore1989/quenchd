class SessionsController < ApplicationController
  def new
    @disable_header = true
    render :new
  end

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

    if @user
      login(@user)
      redirect_to root_url
    else
      flash.now[:errors] = ["Incorrect Username or Password"]
      @disable_header = true
      render :new
    end
  end

  def destroy
    logout
    redirect_to static_pages_landing_url
  end
end
