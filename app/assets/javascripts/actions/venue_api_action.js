window.VenueApiAction = {
  receiveVenue: function (venue, likes) {
    AppDispatcher.dispatch({
      actionType: QuenchdConstants.ITEM_RECEIVED,
      item: {id:venue.id, venue: venue},
      likes: likes
    });
  }
};
