window.UserApiAction = {
  receiveUser: function (user) {
    AppDispatcher.dispatch({
      actionType: BeerConstants.USER_RECEIVED,
      user: user
    });
  }
};
