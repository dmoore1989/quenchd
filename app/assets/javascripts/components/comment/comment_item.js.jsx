window.CommentItem = React.createClass ({
  render: function () {
    var user = this.props.comments.user.username;
    var linkUser = "/user/" + this.props.comments.user.id;
    return(
      <div>
        <ReactRouter.Link
          to={linkUser}
          className="link">
          {user}
        </ReactRouter.Link>: {this.props.comments.body}
        {this.props.comments.created}
      </div>
    );
  }
});
