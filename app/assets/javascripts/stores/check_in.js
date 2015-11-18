(function(root){
  var _checkIns = [];
  var CHANGE_EVENT = "CHANGE_EVENT";

  root.CheckInStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _checkIns.slice();
    },

    addChangeHandler: function (callback) {
      CheckInStore.on(CHANGE_EVENT, callback);
    },

    removeChangeHandler: function (callback) {
      CheckInStore.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherId: AppDispatcher.register(function (payload) {
      switch (payload.actionType){
        case BeerConstants.CHECKINS_RECEIVED:
          _checkIns = payload.checkIns;
          CheckInStore.emit(CHANGE_EVENT);
          break;
        case BeerConstants.CHECKIN_RECEIVED:
          _checkIns.push(payload.checkIn);
          CheckInStore.emit(CHANGE_EVENT);
          break;
      }
    })

  });
})(this);
