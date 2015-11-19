class UsersController < ApplicationController

  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      redirect_to static_pages_home_url
    else
      flash.now[:error] = @user.errors.full_messages
      render :new
    end
  end

  def edit
    @user = User.find_by(params[:id])
    render :edit
  end

  def update
    @user = User.find_by(params[:id])

    if @user.update_attributes(user_params)
      flash[:notice] = ["User Updated!!!"]
      redirect_to user_url(@user.id)
    else
      flash[:error] = @user.errors.full_messages
      render :edit
    end
  end

  def destroy
    User.find_by(params[:id]).destroy
    redirect_to static_pages_landing_url
  end


  def user_params
    params.require(:user).permit(:email, :username, :password, :dob, :location, :website, :about)
  end
end
