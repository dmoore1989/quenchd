window.BreweryApiAction = {
  receiveBrewery: function (brewery, likes) {
    AppDispatcher.dispatch({
      actionType:QuenchdConstants.ITEM_RECEIVED,
      item: {brewery: brewery},
      likes: likes
    });
  }
};
