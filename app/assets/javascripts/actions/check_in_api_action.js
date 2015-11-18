window.CheckInApiAction = {
  receiveCheckIns: function (checkIns) {
    AppDispatcher.dispatch({
      actionType: BeerConstants.CHECKINS_RECEIVED,
      checkIns: checkIns
    });
  }
}
