window.VenueApiAction = {
  receiveVenue: function (brewery) {
    AppDispatcher.dispatch({
      actionType: QuenchdConstants.ITEM_RECEIVED,
      item: {venue: venue}
    });
  }
};
