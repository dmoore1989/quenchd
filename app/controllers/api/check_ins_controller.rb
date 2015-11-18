class Api::CheckInsController < ApplicationController
  def index
    @check_ins = CheckIn.all()
    render :index
  end

  def show
  end

  def create
  end

  def update
  end

  def destroy
  end

  def check_in_params
    params.require(:check_in).permit(:user_id, :beer_id, :venue_id, :rating, :review)
  end

end
