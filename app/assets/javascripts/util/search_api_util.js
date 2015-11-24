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
  }
};
