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
        if (pageNumber === 1) {
          CheckInApiAction.clearCheckIns();
        }
        CheckInApiAction.receiveCheckIns(data);
      })
    });
  },

  createCheckIn: function (formData) {
    $.ajax({
      url: "api/check_ins",
      type: "POST",
      processData: false,
      contentType: false,
      data: formData,
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
