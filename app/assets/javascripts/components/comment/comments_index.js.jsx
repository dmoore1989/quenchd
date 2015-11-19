window.CommentsIndex = React.createClass({
  getInitialState: function () {
    return ({comments: CommentStore.all()});
  },

  componentDidMount: function () {
    CommentStore.addChangeHandler(this.updateComments);
  },

  componentWillUnmount: function () {
    CommentStore.removeChangeHandler(this.updateComments);
  },

  render: function () {
    if (this.state.comments){
      return (
        <div>
        {this.state.comments.map(function(comment, idx){
          return (<CommentItem
                    key={idx}
                    Comment={checkIn}/>
                  );
        }, this)}
        </div>
      );
    } else {
      return (<div>/</div>);
    }
  }

});
