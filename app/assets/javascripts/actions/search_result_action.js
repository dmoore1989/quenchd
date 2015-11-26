window.SearchResultAction = {
  receiveResults: function (results) {
    AppDispatcher.dispatch({
      actionType: QuenchdConstants.RECEIVE_RESULTS,
      results: results
    });
  },

  clearResults: function (results) {
    AppDispatcher.dispatch({
      actionType: QuenchdConstants.CLEAR_RESULTS
    });
  },

  receiveSpecificResults: function (results) {
    AppDispatcher.dispatch({
      actionType:QuenchdConstants.RECEIVE_SPECIFIC_RESULTS,
      results: results
    });
  }
};
