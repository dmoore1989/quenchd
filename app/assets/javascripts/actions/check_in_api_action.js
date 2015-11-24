window.CheckInApiAction = {
  receiveCheckIns: function (checkIns) {
    AppDispatcher.dispatch({
      actionType: QuenchdConstants.CHECKINS_RECEIVED,
      checkIns: checkIns
    });
  },

  clearCheckIns: function (checkIns) {
    AppDispatcher.dispatch({
      actionType: QuenchdConstants.CHECKINS_CLEARED
    });
  },

  receiveMoreCheckIns: function (checkIns) {
    AppDispatcher.dispatch({
      actionType: QuenchdConstants.CHECKINS_ADDED,
      checkIns: checkIns
    });
  },

  receiveCheckIn: function (checkIn) {
    AppDispatcher.dispatch({
      actionType: QuenchdConstants.CHECKIN_RECEIVED,
      checkIn: checkIn
    });
  },

  deleteCheckIn: function (checkIn) {
    AppDispatcher.dispatch({
      actionType: QuenchdConstants.CHECKIN_DELETED,
      checkIn: checkIn
    });
  }
};
