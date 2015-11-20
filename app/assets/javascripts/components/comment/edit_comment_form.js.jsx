window.EditCommentForm = React.createClass({
  getInitialState: function () {
    return ({
      body: this.props.comment.body
    });
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
    this.setState({body: body});
  },

  render: function () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <textarea onChange={this.handleChange} value={this.state.body}>
          </textarea>
          <button>Submit</button>
        </form>
          <button onClick={this.cancelEdit}>Cancel</button>
        <WordCount count={this.state.body.length} />
      </div>
    );
  }
});
