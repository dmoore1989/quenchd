class Api::CheckInsController < ApplicationController
  def index
    @check_ins = CheckIn.all.order(created_at: :desc).limit(params[:check_in_amt])
    render :index
  end

  def show
  end

  def create
    @check_in = CheckIn.new(check_in_params)
    @check_in.user_id = current_user.id

    if @check_in.save
      render :show
    else
      raise "YOU SUCK"
    end
  end

  def update
  end

  def destroy
  end

  def check_in_params
    params.require(:check_in).permit(:user_id, :beer_id, :venue_id, :rating, :review)
  end

end
