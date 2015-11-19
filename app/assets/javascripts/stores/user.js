(function (root) {
  var _user;
  var CHANGE_EVENT = "CHANGE_EVENT";

  root.UserStore = $extend({}, EventEmitter.prototype, {
    user: function () {
      return _user
    },

    addChangeHandler: function (callback) {
      BeerStore.on(CHANGE_EVENT, callback);
    },

    removeChangeHandler: function (callback) {
      BeerStore.removeListener(CHANGE_EVENT, callback);
    },

    dispatchId: AppDispatcher.register(function (payload) {
      switch (payload.actionType){
        case BeerConstants.BEER_RECEIVED:
          _beer = payload.beer;
          BeerStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });
})(this);
