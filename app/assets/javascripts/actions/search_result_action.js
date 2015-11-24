window.SearchResultAction = {
  receiveResults: function (results) {
    AppDispatcher.dispatch({
      actionType: QuenchdConstants.RECEIVE_RESULTS,
      results: results
    });
  }
};
