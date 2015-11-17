class UsersController < ApplicationController

  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      redirect_to root
    else
      flash.now[:error] = @user.errors.full_messages
      render :new
  end

  def edit
    @user = User.find_by(params[:id])
    render :edit
  end

  def update
    @user = User.find_by(params[:id])

    if @user.update
      flash[:notice] = ["User Updated!!!"]
      redirect_to user_url(@user.id)
    else
      flash[:error] = @user.errors.full_messages
      render edit
  end

  def destroy
    User.find_by(params[:id]).destroy
    redirect_to landing
  end

  def show
    @user = User.find_by(params[:id])
    render :show
  end
end
