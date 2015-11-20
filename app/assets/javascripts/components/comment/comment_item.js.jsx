window.CommentItem = React.createClass ({
  getInitialState: function () {
    return ({edit: false});
  },

  deleteComment: function () {
    CommentApiUtil.deleteComment(this.props.comment.id);
  },



  displayOrEditComment: function () {
    if (this.state.edit) {
      return (
        <EditCommentForm comment={this.props.comment} />
      );
    } else {
      return (
        <DisplayComment comment={this.props.comment} />
      );
    }
  },

  render: function () {
    return(
      <li>
        {this.displayOrEditComment()}
      </li>
    );
  }
});
