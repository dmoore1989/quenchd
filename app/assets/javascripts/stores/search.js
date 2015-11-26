(function (root) {
  var _search_results = {};
  var _detail_search = {};
  var CHANGE_EVENT = "CHANGE";

  root.SearchStore = $.extend({}, EventEmitter.prototype, {

    addChangeHandler: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeHandler: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },


    results: function () {
      return _search_results;
    },

    detailResults: function () {
      return _detail_search;
    },

    dispatchId: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {
        case QuenchdConstants.RECEIVE_RESULTS:
          _search_results = payload.results;
          SearchStore.emit(CHANGE_EVENT);
          break;
        case QuenchdConstants.RECEIVE_SPECIFIC_RESULTS:
          _detail_search = payload.results;
          SearchStore.emit(CHANGE_EVENT);
          break;
        case QuenchdConstants.CLEAR_RESULTS:
          debugger
          _search_results = {};
          SearchStore.emit(CHANGE_EVENT);
      }
    })

   });
})(this);
