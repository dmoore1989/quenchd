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
};
