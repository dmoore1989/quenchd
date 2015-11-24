window.UserApiUtil = {
  fetchUser: function(id) {
    $.ajax({
      url: "/api/users/" + id,
      type: "GET",
      dataType: "json",
      success:(function (data) {
        CheckInApiAction.clearCheckIns();
        UserApiAction.receiveUser(data.user);
        CheckInApiAction.receiveCheckIns(data.check_ins);
      })
    });
  },
};
