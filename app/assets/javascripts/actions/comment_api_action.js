window.CommentApiAction={
  receiveComments: function (comments) {
    AppDispatcher.dispatch({
      actionType: BeerConstants.COMMENTS_RECEIVED,
      comments: comments
    });
  }
};
