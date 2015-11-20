class Api::CommentsController < ApplicationController

  def create
    @comment = Comment.new(comment_params)
    @comment.commenter_id = current_user.id

    if @comment.save
      render :show
    end
  end

  def update
    @comment = editable_comments.find(params[:id])
    if @comment.update(comment_params)
      render :show
    end
  end

  def destroy

    @comment = editable_comments.find(params[:id]).destroy

    render :show

  end

  def comment_params
    params.require(:comment).permit(:check_in_id, :commenter_id, :body)
  end

  def editable_comments
    Comment
      .joins("INNER JOIN check_ins ON comments.check_in_id = check_ins.id")
      .where("check_ins.user_id = ? OR comments.commenter_id = ?", current_user.id, current_user.id)
  end
end
