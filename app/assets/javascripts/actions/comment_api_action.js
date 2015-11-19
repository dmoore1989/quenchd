window.CommentApiAction={
  receiveComments: function () {
    AppDispatcher.dispatch({
      actionType: BeerConstants.COMMENTS_RECEIVED,
      comments: comments
    });
  }
};
