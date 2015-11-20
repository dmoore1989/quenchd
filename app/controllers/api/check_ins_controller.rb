class Api::CheckInsController < ApplicationController
  def index
    @check_ins = CheckIn.all.order(created_at: :desc)
    render :index
  end

  def show
  end

  def create
    @check_in = CheckIn.new(check_in_params)
    @check_in.user_id = current_user.id

    if @check_in.save
      render :show
    end
  end

  def destroy
    @check_in = current_user.check_ins.find(params[:id]).destroy
    render :show
  end

  def check_in_params
    params.require(:check_in).permit(:user_id, :beer_id, :venue_id, :rating, :review)
  end

end
