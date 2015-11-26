class UsersController < ApplicationController

  def new
    @disable_header = true
    @user = User.new
    render :new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      redirect_to root_url
    else
      flash.now[:error] = @user.errors.full_messages
      render :new
    end
  end

  def edit
    @user = User.find(params[:id])
    render :edit
  end

  def update
    @user = User.find(params[:id])

    if @user.update_attributes(user_params)
      flash[:notice] = ["User Updated!!!"]
      redirect_to root_url
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
    params.require(:user).permit(:email, :image, :username, :password, :dob, :location, :website, :about)
  end
end
