window.UserApiAction = {
  receiveUser: function (user) {
    AppDispatcher.dispatch({
      actionType: QuenchdConstants.ITEM_RECEIVED,
      item: {user: user}
    });
  },

  receiveNewStatus: function (status) {
    AppDispatcher.dispatch({
      actionType: QuenchdConstants.STATUS_CHANGED,
      status: status
    });
  }
};
