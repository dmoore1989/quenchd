window.CheckInApiUtil = {
  fetchCheckins: function () {
    $.ajax({
      url: "/api/check_ins",
      type: "GET",
      dataType:"json",
      success: (function (data){
        CheckInApiAction.receiveCheckIns(data);
      })
    });
  },

  createCheckIn: function(checkIn) {
    $.ajax({
      url: "api/check_ins",
      type: "POST",
      data: checkIn,
      dataType: "json",
      success: (function (data) {
        CheckInApiAction.receiveCheckIn(data);
      })
    });
  }
};
