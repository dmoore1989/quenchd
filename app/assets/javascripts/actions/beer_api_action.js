window.BeerApiAction = {
  receiveBeer: function (beer, likes) {
    AppDispatcher.dispatch({
      actionType: QuenchdConstants.ITEM_RECEIVED,
      item: {id: beer.id, beer: beer},
      likes: likes
    });
  }
};
