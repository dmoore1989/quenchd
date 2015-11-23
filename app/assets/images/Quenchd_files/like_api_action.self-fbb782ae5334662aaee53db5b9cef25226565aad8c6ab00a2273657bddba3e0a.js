window.LikeApiAction = {
  handleLike: function (data) {
    switch (data.type) {
      case "CheckIn":
        AppDispatcher.dispatch({
          actionType: QuenchdConstants.LIKED,
          like: data.like
        });
        break;
    }
  }
};
