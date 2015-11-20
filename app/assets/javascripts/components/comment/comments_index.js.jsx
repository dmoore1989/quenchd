window.CommentsIndex = React.createClass({
  getInitialState: function () {
    return ({commentForm: "hidden"});
  },

  componentDidMount: function () {
    CommentStore.addChangeHandler(this.updateComments);
  },

  componentWillUnmount: function () {
    CommentStore.removeChangeHandler(this.updateComments);
  },

  updateComments: function () {
    this.setState({comments: CommentStore.all()});
  },

  toggleCommentForm: function () {
    var klass = ((this.state.commentForm === "hidden") ? "visible" : "hidden");
    this.setState({commentForm: klass});
  },

  render: function () {
    if (this.props.checkIn.comments){
      return (
        <div>
          <ul>
            {this.props.checkIn.comments.map(function(comment, idx){
              return (<CommentItem
                        key={idx}
                        comment={comment}
                        checkIn={this.props.checkIn}/>
                      );
            }, this)}
          </ul>
          <button onClick={this.toggleCommentForm} >
            Add Comment
          </button>
          <div className={this.state.commentForm}>
            <CommentForm checkIn={this.props.checkIn} />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleCommentForm} >
            Add Comment
          </button>
          <div className={this.state.commentForm}>
            <CommentForm checkIn={this.props.checkIn} />
          </div>
        </div>);
    }
  }

});
