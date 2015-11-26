window.VenueApiUtil = {
  fetchVenue: function (id, pageNumber) {
    $.ajax({
      url: "/api/venues/" + id,
      type: "GET",
      dataType: "json",
      data: {page_number: pageNumber},
      success: (function (data) {
        if (pageNumber === 1) {
          CheckInApiAction.clearCheckIns();
          VenueApiAction.receiveVenue(data.venue, data.likes);
        }
        CheckInApiAction.receiveCheckIns(data.check_ins);
      })
    });
  }
};
