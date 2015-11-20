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

    delete: function (id) {
      for (var i = 0; i < _checkIns.length; i++) {
        if (_checkIns[i].id === id) {
          _checkIns.splice(i, 1);
          return;
        }
      }
    },

    insertNewCheckIn: function (checkIn) {
      for (var j = 0; j < _checkIns.length; j++) {
        if (_checkIns[j].id === checkIn.id) {
          _checkIns[j] = checkIn;
          return;
        }
      }
      _checkIns.push(checkIn);
    },


    dispatcherId: AppDispatcher.register(function (payload) {
      switch (payload.actionType){
        case QuenchdConstants.CHECKINS_RECEIVED:
          _checkIns = payload.checkIns;
          CheckInStore.emit(CHANGE_EVENT);
          break;
        case QuenchdConstants.CHECKIN_RECEIVED:
          CheckInStore.insertNewCheckIn(payload.checkIn);
          CheckInStore.emit(CHANGE_EVENT);
          break;
        case QuenchdConstants.CHECKIN_DELETED:
          CheckInStore.delete(payload.checkIn.id);
          CheckInStore.emit(CHANGE_EVENT);
          break;
      }
    })

  });
})(this);
