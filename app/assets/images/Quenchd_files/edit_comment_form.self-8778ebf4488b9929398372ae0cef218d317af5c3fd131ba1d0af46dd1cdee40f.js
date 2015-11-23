window.EditCommentForm = React.createClass({
  displayName: "EditCommentForm",

  getInitialState: function () {
    return {
      body: this.props.comment.body
    };
  },

  cancelEdit: function () {
    this.props.toggleEdit();
  },

  handleSubmit: function (e) {
    e.preventDefault();
    comment = {
      id: this.props.comment.id,
      body: this.state.body,
      check_in_id: this.props.checkIn.id
    };
    this.props.toggleEdit();

    CommentApiUtil.editComment(comment);
  },

  handleChange: function (e) {
    var body = e.currentTarget.value;
    if (body.length > 140) {
      body = body.slice(0, 140);
    }
    this.setState({ body: body });
  },

  render: function () {
    return React.createElement(
      "div",
      { className: "comment-form edit group" },
      React.createElement(
        "form",
        null,
        React.createElement("textarea", { onChange: this.handleChange, value: this.state.body }),
        React.createElement(
          "button",
          { className: "edit-button cancel", onClick: this.cancelEdit },
          "Cancel"
        ),
        React.createElement(
          "button",
          {
            onClick: this.handleSubmit,
            className: "edit-button link" },
          "Update"
        )
      ),
      React.createElement(WordCount, { count: this.state.body.length })
    );
  }
});