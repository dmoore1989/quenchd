(function (root) {
  var _users = [];
  var CHANGE_EVENT = "CHANGE_EVENT";

  root.UserStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _users.slice();
    },


    addChangeHandler: function (callback) {
      UserStore.on(CHANGE_EVENT, callback);
    },

    removeChangeHandler: function (callback) {
      UserStore.removeListener(CHANGE_EVENT, callback);
    },

    dispatchId: AppDispatcher.register(function (payload) {
      switch (payload.actionType){
        case QuenchdConstants.USER_RECEIVED:
          _users = payload.users;
          UserStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });
})(this);
