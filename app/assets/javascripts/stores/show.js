(function (root) {
  var _show;
  var _likes = [];
  var CHANGE_EVENT = "CHANGE_EVENT";

  root.ShowStore = $.extend({}, EventEmitter.prototype, {
    item: function () {
      debugger
      return _show;
    },

    allLikes: function () {
      return _likes.slice();
    },

    deleteLike: function () {
      for (var i = 0; i < _likes.length; i++) {
        if (_likes[i].liker_id === currentUserId) {
          _likes.splice(i,1);
        }
      }
    },

    addChangeHandler: function (callback) {
      ShowStore.on(CHANGE_EVENT, callback);
    },

    removeChangeHandler: function (callback) {
      ShowStore.removeListener(CHANGE_EVENT, callback);
    },

    dispatchId: AppDispatcher.register(function (payload) {
      switch (payload.actionType){
        case QuenchdConstants.ITEM_RECEIVED:
          _show = payload.item;
          _likes = payload.likes || [];
          ShowStore.emit(CHANGE_EVENT);
          break;
        case QuenchdConstants.SHOW_LIKED:
          _likes.push(payload.like);
          ShowStore.emit(CHANGE_EVENT);
          break;
        case QuenchdConstants.SHOW_UNLIKED:
          ShowStore.deleteLike();
          ShowStore.emit(CHANGE_EVENT);
          break;
        case QuenchdConstants.STATUS_CHANGED:
          _show.user.status = payload.status;
          ShowStore.emit(CHANGE_EVENT);
          break;

      }
    })
  });
})(this);
