window.CheckInApiUtil = {
  fetchCheckins: function () {
    $.ajax({
      url: "/api/check_ins",
      type: "GET",
      dataType:"json",
      success: (function (data){
        CheckInApiAction.receiveCheckIns(data.check_ins);
      })
    });
  }
};
