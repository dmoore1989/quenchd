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
      url: 'api/search',
      type: 'GET',
      dataType: 'json',
      data: {query: query, type: type},
      success: function () {
        SearchResultAction.receiveResults(results);
      }
    });
  }
};
