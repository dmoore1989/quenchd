(function (root) {
  var _search_results = {};
  var CHANGE_EVENT = "CHANGE";

  root.SearchResultStore = $.extend({}, EventEmitter.prototype, {

    addChangeHandler: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeHandler: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },


    results: function () {
      return _search_results;
    },

    dispatcherId: AppDispatcher.register(function (payload) {
      switch (payload.ActionType) {
        case QuenchdConstants.RECEIVE_RESULTS:
          _search_results = payload.results;
          console.log(_search_results)
          SearchResultStore.emit(CHANGE_EVENT);
          break;
      }
    })

   });
})(this);
