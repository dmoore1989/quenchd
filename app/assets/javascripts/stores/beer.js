(function (root) {
  var _beer;
  var CHANGE_EVENT = "CHANGE_EVENT";

  root.BeerStore = $.extend({}, EventEmitter.prototype, {
    beer: function () {
        return _beer;
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
