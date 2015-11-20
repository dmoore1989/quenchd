window.DisplayComment = React.createClass ({

  toggleEdit: function () {
    this.props.toggleEdit();
  },

  deleteComment: function () {
    CommentApiUtil.deleteComment(this.props.comment.id);
  },

  render: function () {
    var user = this.props.comment.user.username;
    var linkUser = "/user/" + this.props.comment.user.id;
    return (
      <div>
        <ReactRouter.Link
          to={linkUser}
          className="link">
          {user}
        </ReactRouter.Link>: {this.props.comment.body}
        {this.props.comment.created}
        <button onClick={this.toggleEdit}>Edit</button>
        <button onClick={this.deleteComment}>Delete</button>
      </div>
    );
  }
});