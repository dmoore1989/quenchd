window.DisplayComment = React.createClass ({
  getInitialState: function () {
    var checkInUser= this.props.checkIn.user.id;
    var commentUser = this.props.comment.user.id;
    if (checkInUser === current_user_id || commentUser === current_user_id){
      return ({editable:"visible"});
    } else
      return ({editable:"hidden"});
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
        <ReactRouter.Link
          to={linkUser}
          className="link">
          {user}
        </ReactRouter.Link>: {this.props.comment.body}
        {this.props.comment.created}
        <div className={this.state.editable}>
          <button onClick={this.toggleEdit}>Edit</button>
          <button onClick={this.deleteComment}>Delete</button>
        </div>
      </div>
    );
  }
});
