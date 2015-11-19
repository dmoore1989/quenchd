window.CommentItem = React.createClass ({
  render: function () {
    var user = this.props.comment.user.username;
    var linkUser = "/user/" + this.props.comment.user.id;
    return(
      <li>
        <ReactRouter.Link
          to={linkUser}
          className="link">
          {user}
        </ReactRouter.Link>: {this.props.comment.body}
        {this.props.comment.created}
      </li>
    );
  }
});
