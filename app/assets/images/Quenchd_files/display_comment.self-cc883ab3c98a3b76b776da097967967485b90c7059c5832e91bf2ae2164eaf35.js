window.DisplayComment = React.createClass({
  displayName: "DisplayComment",

  editableButton: function () {
    var checkInUser = this.props.checkIn.user.id;
    var commentUser = this.props.comment.user.id;
    if (checkInUser === currentUserId || commentUser === currentUserId) {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "button",
          { className: "link", onClick: this.toggleEdit },
          "Edit"
        ),
        React.createElement(
          "button",
          { className: "link", onClick: this.deleteComment },
          "Delete"
        )
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
    return React.createElement(
      "div",
      null,
      React.createElement("img", {
        className: "comment-img",
        src: "https://placeholdit.imgix.net/~text?txtsize=6&txt=abstract%20user&w=35&h=35" }),
      React.createElement(
        "div",
        { className: "comment-detail" },
        React.createElement(
          ReactRouter.Link,
          {
            to: linkUser,
            className: "link" },
          user
        ),
        ": ",
        this.props.comment.body,
        React.createElement(
          "sub",
          { className: "bottom-check-in-bar group" },
          React.createElement(
            "div",
            null,
            this.props.comment.created
          ),
          this.editableButton()
        )
      )
    );
  }
});