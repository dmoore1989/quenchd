window.CheckInApiAction = {
  receiveCheckIns: function (checkIns) {
    AppDispatcher.dispatch({
      actionType: BeerConstants.CHECKINS_RECEIVED,
      checkIns: checkIns
    });
  },

  receiveCheckIn: function (checkIn) {
    AppDispatcher.dispatch({
      actionType: BeerConstants.CHECKIN_RECEIVED,
      checkIn: checkIn
    });
  }
};
