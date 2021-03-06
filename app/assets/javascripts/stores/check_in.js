(function(root){
  var _checkIns = [];
  var CHANGE_EVENT = "CHANGE_EVENT";
  var PAGE_END = "PAGE_END";

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

    addPageEndHandler: function (callback) {
      CheckInStore.on(PAGE_END, callback);
    },

    removePageEndHandler: function (callback) {
      CheckInStore.removeListener(PAGE_END, callback);
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
      _checkIns.unshift(checkIn);
    },

    addLike: function (like) {
      for (var j = 0; j < _checkIns.length; j++) {
        if (_checkIns[j].id === like.likeable_id) {
          _checkIns[j].likes.unshift(like);
          return;
        }
      }
    },


    dispatcherId: AppDispatcher.register(function (payload) {
      switch (payload.actionType){
        case QuenchdConstants.CHECKINS_RECEIVED:
          if (payload.checkIns.length < 10) {
            CheckInStore.emit(PAGE_END);
          }
          _checkIns = _checkIns.concat(payload.checkIns);
          CheckInStore.emit(CHANGE_EVENT);
          break;
        case QuenchdConstants.CHECKINS_CLEARED:
          _checkIns = [];
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
        case QuenchdConstants.LIKED:
          CheckInStore.addLike(payload.like);
          CheckInStore.emit(CHANGE_EVENT);
          break;
        case QuenchdConstants.UNLIKED:
          CheckInStore.insertNewCheckIn(payload.checkIn);
          CheckInStore.emit(CHANGE_EVENT);
          break;
      }
    })

  });
})(this);
