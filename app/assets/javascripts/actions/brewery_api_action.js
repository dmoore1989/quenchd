window.BreweryApiAction = {
  receiveBrewery: function (brewery, likes) {
    AppDispatcher.dispatch({
      actionType:QuenchdConstants.ITEM_RECEIVED,
      item: {id: brewery.id, brewery: brewery},
      likes: likes
    });
  }
};
