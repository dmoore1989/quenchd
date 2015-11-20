class Api::CommentsController < ApplicationController

  def create
    @comment = Comment.new(comment_params)
    @comment.commenter_id = current_user.id

    if @comment.save
      render :show
    end
  end

  def update
    @comment = current_user_comments.find(params[:id])
    if @comment.update(comment_params)
      render :show
    end
  end

  def destroy

    @comment = current_user_comments.find(params[:id])

    render :show

  end

  def comment_params
    params.require(:comment).permit(:check_in_id, :commenter_id, :body)
  end



end
