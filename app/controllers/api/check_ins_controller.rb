class Api::CheckInsController < ApplicationController
  def index
    if params[:type] == "all"
      @check_ins = CheckIn
        .includes({comments: [:commenter]}, :beer, :brewery, :venue, :user, :likes)
        .order(created_at: :desc)
        .page(params[:page_number])
        .per(10)
    elsif params[:type] == "friends"
      friend_ids = current_user.friends.map(&:id).push(current_user.id)
      @check_ins = CheckIn
        .where("user_id IN (?)", friend_ids)
        .order(created_at: :desc)
        .page(params[:page_number])
        .per(10)
    else
      @check_ins = current_user
        .check_ins
        .order(created_at: :desc)
        .page(params[:page_number])
        .per(10)
    end
    render :index
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
    params.require(:check_in).permit(:user_id, :image, :beer_id, :venue_id, :rating, :review)
  end

end
