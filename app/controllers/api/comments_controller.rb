class CommentsController < ApplicationController
  def index
  end

  def create
  end

  def update
  end

  def destroy
  end

  def comment_params
    params.require(:comments).permit(:checkin_id, :commenter_id, :body)
  end
end
