window.SearchApiUtil = {
  search: function (query) {
    $.ajax({
      url: 'api/search',
      type: 'GET',
      dataType: 'json',
      data: {query: query},
      success: function (results) {
        SearchResultAction.receiveResults(results);
      }
    });
  },

  specificSearch: function (query, type ) {
    $.ajax({
      url: 'api/search/' + type,
      type: 'GET',
      dataType: 'json',
      data: {query: query},
      success: function (data) {
        debugger
        SearchResultAction.receiveSpecificResults(data);
      }
    });
  }
};
