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

  render: function () {
    if (this.props.comments){
      return (
        <ul>
        {this.props.comments.map(function(comment, idx){
          return (<CommentItem
                    key={idx}
                    comment={comment}/>
                  );
        }, this)}
        </ul>
      );
    } else {
      return (<div></div>);
    }
  }

});
