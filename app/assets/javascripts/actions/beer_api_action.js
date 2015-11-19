window.BeerApiAction = {
  receiveBeer: function (beer) {
    AppDispatcher.dispatch({
      actionType: QuenchdConstants.BEER_RECEIVED,
      beer: beer
    });
  }
};
