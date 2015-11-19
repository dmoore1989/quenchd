(function(root){
  var _checkIns = {};
  var CHANGE_EVENT = "CHANGE_EVENT";

  root.CheckInStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _checkIns;
    },

    addChangeHandler: function (callback) {
      CheckInStore.on(CHANGE_EVENT, callback);
    },

    removeChangeHandler: function (callback) {
      CheckInStore.removeListener(CHANGE_EVENT, callback);
    },


    dispatcherId: AppDispatcher.register(function (payload) {
      switch (payload.actionType){
        case QuenchdConstants.CHECKINS_RECEIVED:
          _checkIns = payload.checkIns;
          CheckInStore.emit(CHANGE_EVENT);
          break;
        case QuenchdConstants.CHECKIN_RECEIVED:
          _checkIns[payload.checkIn.id] = (payload.checkIn);
          CheckInStore.emit(CHANGE_EVENT);
          break;
        case QuenchdConstants.CHECKINS_ADDED:
          CheckInStore.emit(CHANGE_EVENT);
          break;
        case QuenchdConstants.CHECKIN_DELETED:
          _checkIns[payload.checkIn.id] = null;
          CheckInStore.emit(CHANGE_EVENT);
          break;
      }
    })

  });
})(this);
