window.CommentApiAction={
  receiveComments: function (comments) {
    AppDispatcher.dispatch({
      actionType: QuenchdConstants.COMMENTS_RECEIVED,
      comments: comments
    });
  }
};
