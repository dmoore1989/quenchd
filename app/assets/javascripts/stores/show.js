(function (root) {
  var _show;
  var _showType;
  var CHANGE_EVENT = "CHANGE_EVENT";

  root.ShowStore = $.extend({}, EventEmitter.prototype, {
    item: function () {
      return _show;
    },

    type: function () {
      return _showType;
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
          _showType = payload.type;
          ShowStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });
})(this);
