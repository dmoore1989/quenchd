window.UserApiUtil = {
  fetchUser: function(id) {
    $.ajax({
      url: "/api/users/" + id,
      type: "GET",
      dataType: "json",
      success:(function (data) {
        CheckInApiAction.receiveCheckIns(data.check_ins);
        UserApiAction.receiveUser(data.user);
      })
    });
  },
};
