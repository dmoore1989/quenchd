window.DisplayComment = React.createClass ({
  editableButton: function () {
    var checkInUser= this.props.checkIn.user.id;
    var commentUser = this.props.comment.user.id;
    if (checkInUser === currentUserId || commentUser === currentUserId){
      return (
        <div>
          <button className="link" onClick={this.toggleEdit}>Edit</button>
          <button className="link" onClick={this.deleteComment}>Delete</button>
        </div>
      );
    }
  },

  toggleEdit: function () {
    this.props.toggleEdit();
  },

  deleteComment: function () {
    CommentApiUtil.deleteComment(this.props.comment.id);
  },

  render: function () {
    var user = this.props.comment.user.username;
    var linkUser = "/users/" + this.props.comment.user.id;
    return (
      <div>
      <img
        className="comment-img"
        src="https://placeholdit.imgix.net/~text?txtsize=6&txt=abstract%20user&w=35&h=35" />
        <div className="comment-detail">
          <ReactRouter.Link
            to={linkUser}
            className="link">
            {user}
          </ReactRouter.Link>: {this.props.comment.body}
          <sub className="bottom-check-in-bar group">
            <div>{this.props.comment.created} ago</div>
            {this.editableButton()}
          </sub>
        </div>
      </div>
    );
  }
});
