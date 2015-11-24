class Api::BreweriesController < ApplicationController
  def show
    @brewery = Brewery
      .includes(:likes, :check_ins)
      .find(params[:id])
    @check_ins = @brewery
      .check_ins
      .includes(:comments, :beer, :brewery, :venue, :user, :likes)
      .order(created_at: :desc)
      .page(params[:page_number])
      .per(10)
    @comments = @check_ins.map(&:comments)
    render :show
  end

end
