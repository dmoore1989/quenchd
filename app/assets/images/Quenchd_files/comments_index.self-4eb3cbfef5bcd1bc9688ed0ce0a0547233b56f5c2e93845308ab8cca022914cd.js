window.CommentsIndex = React.createClass({
  displayName: "CommentsIndex",

  componentDidMount: function () {
    CommentStore.addChangeHandler(this.updateComments);
  },

  componentWillUnmount: function () {
    CommentStore.removeChangeHandler(this.updateComments);
  },

  updateComments: function () {
    this.setState({ comments: CommentStore.all() });
  },

  commentForm: function () {
    return this.props.toggleCommentForm ? "visible" : "hidden";
  },

  render: function () {
    if (this.props.checkIn.comments) {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "ul",
          { className: "comments group" },
          this.props.checkIn.comments.map(function (comment, idx) {
            return React.createElement(CommentItem, {
              key: idx,
              comment: comment,
              checkIn: this.props.checkIn });
          }, this),
          React.createElement(
            "li",
            { className: this.commentForm() },
            React.createElement(CommentForm, { checkIn: this.props.checkIn })
          )
        )
      );
    } else {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { className: this.commentForm() },
          React.createElement(CommentForm, { checkIn: this.props.checkIn })
        )
      );
    }
  }

});