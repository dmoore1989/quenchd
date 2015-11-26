window.CheckInApiUtil = {
  fetchCheckins: function (pageNumber) {
    $.ajax({
      url: "/api/check_ins",
      type: "GET",
      dataType:"json",
      data: {
        page_number: pageNumber
      },
      success: (function (data) {
        CheckInApiAction.clearCheckIns();
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
