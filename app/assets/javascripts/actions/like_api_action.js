window.LikeApiAction = {
  receiveLike: function (like) {
    AppDispatcher.dispatch({
      actionType: QuenchdConstants.LIKED,
      like: like
    });
  }
};
