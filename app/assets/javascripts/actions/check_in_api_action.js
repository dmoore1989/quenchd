window.CheckInApiAction = {
  receiveCheckIns: function (checkIns) {
    AppDispatcher.dispatch({
      actionType: BeerConstants.CHECKINS_RECEIVED,
      checkIns: checkIns
    });
  },

  receiveMoreCheckIns: function (checkIns) {
    AppDispatcher.dispatch({
      actionType: BeerConstants.CHECKINS_ADDED
    });
  },

  receiveCheckIn: function (checkIn) {
    AppDispatcher.dispatch({
      actionType: BeerConstants.CHECKIN_RECEIVED,
      checkIn: checkIn
    });
  }
};
