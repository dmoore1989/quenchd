window.CommentItem = React.createClass({
  displayName: "CommentItem",

  getInitialState: function () {
    return { edit: false };
  },

  toggleEdit: function () {
    var editComment = this.state.edit ? false : true;
    this.setState({ edit: editComment });
  },

  displayOrEditComment: function () {
    if (this.state.edit) {
      return React.createElement(EditCommentForm, {
        comment: this.props.comment,
        checkIn: this.props.checkIn,
        toggleEdit: this.toggleEdit });
    } else {
      return React.createElement(DisplayComment, {
        comment: this.props.comment,
        checkIn: this.props.checkIn,
        toggleEdit: this.toggleEdit });
    }
  },

  render: function () {
    return React.createElement(
      "li",
      { className: "comment group" },
      this.displayOrEditComment()
    );
  }
});