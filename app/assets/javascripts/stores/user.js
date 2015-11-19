(function (root) {
  var _user;
  var CHANGE_EVENT = "CHANGE_EVENT";

  root.UserStore = $.extend({}, EventEmitter.prototype, {
    user: function () {
      return _user;
    },

    addChangeHandler: function (callback) {
      UserStore.on(CHANGE_EVENT, callback);
    },

    removeChangeHandler: function (callback) {
      UserStore.removeListener(CHANGE_EVENT, callback);
    },

    dispatchId: AppDispatcher.register(function (payload) {
      switch (payload.actionType){
        case BeerConstants.USER_RECEIVED:
          _user = payload.user;
          UserStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });
})(this);
