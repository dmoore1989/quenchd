window.BeerApiAction= {
  receiveBeer: function (beer) {
    AppDispatcher.dispatch({
      actionType: BeerConstants.BEER_RECEIVED,
      beer: beer
    });
  }
};
