window.VenueApiAction = {
  receiveVenue: function (venue) {
    AppDispatcher.dispatch({
      actionType: QuenchdConstants.ITEM_RECEIVED,
      item: {venue: venue}
    });
  }
};
