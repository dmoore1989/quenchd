window.CommentForm = React.createClass({
  getInitialState: function () {
    return ({
      body: ""
    });
  },

  handleChange: function (e) {
    this.setState({body: e.currentTarget.value});
  },

  handleSubmit: function (e) {
    e.preventDefault();
    comment = {
      body: this.state.body,
      check_in_id: this.props.checkIn.id
    };

    CommentApiUtil.createComment(comment);
  },

  render: function () {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea onChange={this.handleChange} value={this.state.body}>
        </textarea>
        <button>Submit</button>
      </form>
    );
  }
});
