window.CommentItem = React.createComponent ({
  render: function () {
    var user = this.props.comments.user.username;
    var linkUser = "/user/" + this.props.comments.user.id
  }
});
