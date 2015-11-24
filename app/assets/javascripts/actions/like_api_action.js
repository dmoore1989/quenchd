window.LikeApiAction = {
  receiveLike: function (like) {
    AppDispatcher.dispatch({
      actionType: QuenchdConstants.SHOW_LIKED,
      like: like
    });
  },

  deleteLike: function () {
    AppDispatcher.dispatch({
    actionType: QuenchdConstants.SHOW_UNLIKED
  });
  }
};
