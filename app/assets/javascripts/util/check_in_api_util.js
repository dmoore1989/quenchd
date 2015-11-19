window.CheckInApiUtil = {
  fetchCheckins: function () {
    $.ajax({
      url: "/api/check_ins",
      type: "GET",
      dataType:"json",
      data: {
        start: 0,
        stop: BeerConstants.STARTING_REQUESTS
      },
      success: (function (data){
        CheckInApiAction.receiveCheckIns(data);
        CommentApiAction.receiveComments(data.comments);
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
      success: (function (data){
        CheckInApiAction.receiveMoreCheckIns(data);
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
