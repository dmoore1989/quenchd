window.CommentsIndex = React.createClass({
  componentDidMount: function () {
    CommentStore.addChangeHandler(this.updateComments);
  },

  componentWillUnmount: function () {
    CommentStore.removeChangeHandler(this.updateComments);
  },

  updateComments: function () {
    this.setState({comments: CommentStore.all()});
  },

  commentForm: function () {
    return (this.props.toggleCommentForm ? "visible" : "hidden");
  },

  render: function () {
    if (this.props.checkIn.comments){
      return (
        <div>
          <ul className="comments group">
            {this.props.checkIn.comments.map(function(comment, idx){
              return (<CommentItem
                        key={idx}
                        comment={comment}
                        checkIn={this.props.checkIn}/>
                      );
            }, this)}
            <li className={this.commentForm()}>
              <CommentForm checkIn={this.props.checkIn} />
            </li>
          </ul>
        </div>
      );
    } else {
      return (
        <div>
          <div className={this.commentForm()}>
            <CommentForm checkIn={this.props.checkIn} />
          </div>
        </div>);
    }
  }

});
