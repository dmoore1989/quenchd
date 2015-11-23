class Api::LikesController < ApplicationController
  def create
    @like = Like.new(like_params)
    @like.liker_id = current_user.id

    if @like.save
      render :show
    else
      render @like
    end
  end

  def destroy
    @like= Like.find(params[:id])

    if @like.destroy
      render :show
    end
  end


  def like_params
    params.require(:like).permit(:likeable_id, :likeable_type)
  end

end
