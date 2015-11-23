window.BreweryApiAction = {
  receiveBrewery: function (brewery) {
    AppDispatcher.dispatch({
      actionType:QuenchdConstants.ITEM_RECEIVED,
      item: beer
    });
  }
};
