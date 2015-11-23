(function (root) {
  var _show;
  var CHANGE_EVENT = "CHANGE_EVENT";

  root.ShowStore = $.extend({}, EventEmitter.prototype, {
    item: function () {
      return _show;
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
          ShowStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });
})(this);
