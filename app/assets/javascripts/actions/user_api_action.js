window.UserApiAction = {
  receiveUser: function (user) {
    AppDispatcher.dispatch({
      actionType: QuenchdConstants.ITEM_RECEIVED,
      item: user
    });
  }
};
