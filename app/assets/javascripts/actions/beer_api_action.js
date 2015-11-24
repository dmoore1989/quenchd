window.BeerApiAction = {
  receiveBeer: function (beer, likes) {
    AppDispatcher.dispatch({
      actionType: QuenchdConstants.ITEM_RECEIVED,
      item: {beer: beer},
      likes: likes
    });
  }
};
