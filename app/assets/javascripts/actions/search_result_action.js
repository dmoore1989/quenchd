window.SearchResultAction = {
  receiveResults: function (results) {
    AppDispatcher.dispatch({
      actionType: QuenchdConstants.RECEIVE_RESULTS,
      results: results
    });
  },

  receiveSpecificResults: function (results) {
    AppDispatcher.dispatch({
      actionType:QuenchdConstants.RECEIVE_SPECIFIC_RESULTS,
      results: results
    });
  }
};
