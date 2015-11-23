window.CommentForm = React.createClass({
  displayName: "CommentForm",

  getInitialState: function () {
    return {
      body: ""
    };
  },

  handleSubmit: function (e) {
    e.preventDefault();
    comment = {
      body: this.state.body,
      check_in_id: this.props.checkIn.id
    };
    this.setState({ body: "" });

    CommentApiUtil.createComment(comment);
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
      { className: "comment-form group" },
      React.createElement(
        "form",
        { onSubmit: this.handleSubmit },
        React.createElement("textarea", {
          placeholder: "Leave a comment",
          onChange: this.handleChange,
          value: this.state.body }),
        React.createElement(WordCount, { count: this.state.body.length }),
        React.createElement(
          "button",
          { className: "post-button" },
          "Post"
        )
      )
    );
  }
});