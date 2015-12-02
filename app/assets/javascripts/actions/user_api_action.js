window.UserApiAction = {
  receiveUser: function (user) {
    AppDispatcher.dispatch({
      actionType: QuenchdConstants.ITEM_RECEIVED,
      item: {id: user.id, user: user}
    });
  },

  receiveNewStatus: function (status) {
    AppDispatcher.dispatch({
      actionType: QuenchdConstants.STATUS_CHANGED,
      status: status
    });
  },

  receiveResults: function (data) {
    AppDispatcher.dispatch({
      actionType: QuenchdConstants.USER_RECEIVED,
      users: data.users
    });
  }
};
