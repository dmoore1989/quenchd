window.CommentItem = React.createClass ({
  getInitialState: function () {
    return ({edit: false});
  },


  toggleEdit: function () {
    var editComment = (this.state.edit ? false : true);
    this.setState({edit: editComment});
  },

  displayOrEditComment: function () {
    if (this.state.edit) {
      return (
        <EditCommentForm
          comment={this.props.comment}
          checkIn={this.props.checkIn}
          toggleEdit={this.toggleEdit}/>
      );
    } else {
      return (
        <DisplayComment
          comment={this.props.comment}
          checkIn={this.props.checkIn}
          toggleEdit={this.toggleEdit}/>
      );
    }
  },

  render: function () {
    return(
      <li>
        {this.displayOrEditComment()}
      </li>
    );
  }
});
