window.CommentForm = React.createClass({
  getInitialState: function () {
    return ({
      body: ""
    });
  },

  handleSubmit: function (e) {
    e.preventDefault();
    comment = {
      body: this.state.body,
      check_in_id: this.props.checkIn.id
    };
    this.setState({body:""});

    CommentApiUtil.createComment(comment);
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
        <WordCount count={this.state.body.length} />
      </div>
    );
  }
});
