window.CommentsIndex = React.createClass({

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
