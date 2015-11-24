window.CheckInApiUtil = {
  fetchCheckins: function () {
    $.ajax({
      url: "/api/check_ins",
      type: "GET",
      dataType:"json",
      data: {
        start: 0,
        stop: QuenchdConstants.STARTING_REQUESTS
      },
      success: (function (data) {
        CheckInApiAction.receiveCheckIns(data);
        data.forEach(function (checkIn){
          CommentApiAction.receiveComments(checkIn.comments);
        });
      })
    });
  },

  fetchMoreCheckIns: function (start, stop) {
    $.ajax({
      url: "/api/check_ins",
      type: "GET",
      dataType:"json",
      data: {
        start: start,
        stop: stop
      },
      success: (function (data) {
        CheckInApiAction.receiveMoreCheckIns(data);
      })
    });
  },

  createCheckIn: function (checkIn) {
    $.ajax({
      url: "api/check_ins",
      type: "POST",
      data: checkIn,
      dataType: "json",
      success: (function (data) {
        CheckInApiAction.receiveCheckIn(data);
      })
    });
  },

  deleteCheckIn: function (checkInId) {
    $.ajax({
      url: "api/check_ins/" + checkInId,
      type: "DELETE",
      dataType:"json",
      success: (function (data) {
        CheckInApiAction.deleteCheckIn(data);
      })
    });
  }
};
