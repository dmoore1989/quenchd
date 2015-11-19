window.UserApiAction = {
  receiveUser: function (user) {
    AppDispatcher.dispatch({
      actionType: QuenchdConstants.USER_RECEIVED,
      user: user
    });
  }
};
