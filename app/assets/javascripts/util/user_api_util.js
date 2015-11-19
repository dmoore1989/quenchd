window.UserApiUtil = {
  fetchBeer: function(id) {
    $.ajax({
      url: "/api/users/" + id,
      type: "GET",
      dataType: "json",
      success:(function (data) {
        CheckInApiAction.receiveCheckIns(data.check_ins);
        UserApiAction.receiveBeer(data.user);
      })
    });
  },
};
