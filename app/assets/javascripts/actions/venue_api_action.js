window.VenueApiAction = {
  receiveVenue: function (venue, likes) {
    AppDispatcher.dispatch({
      actionType: QuenchdConstants.ITEM_RECEIVED,
      item: {venue: venue},
      likes: likes
    });
  }
};
