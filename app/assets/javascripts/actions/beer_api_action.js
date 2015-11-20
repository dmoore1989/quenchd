window.BeerApiAction = {
  receiveBeer: function (beer) {
    AppDispatcher.dispatch({
      actionType: QuenchdConstants.ITEM_RECEIVED,
      item: beer
    });
  }
};
