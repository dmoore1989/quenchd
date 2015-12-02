window.UserApiUtil = {
  fetchUser: function(id, pageNumber) {
    $.ajax({
      url: "/api/users/" + id,
      type: "GET",
      dataType: "json",
      data: {page_number: pageNumber},
      success:(function (data) {
        if (pageNumber === 1) {
          CheckInApiAction.clearCheckIns();
          UserApiAction.receiveUser(data.user);
        }
        CheckInApiAction.receiveCheckIns(data.check_ins);
      })
    });
  },

  fetchSidebarInfo: function(id) {
    $.ajax({
      url: "/api/users/sidebar/" + id,
      type: "GET",
      dataType:"json",
      success: (function (data) {
        UserApiAction.receiveUser(data);
      })
    });
  },

  fetchSearchResult: function(query) {
    $.ajax({
      url: "api/users/search/",
      type: "GET",
      dataType: "json",
      data: {query: query},
      success: (function (data) {
        UserApiAction.receiveResults(data);
      })
    });
  }
};
