window.VenueApiUtil = {
  fetchVenue: function (id) {
    $.ajax({
      url: "/api/venues/" + id,
      type: "GET",
      dataType: "json",
      success: (function (data) {
        CheckInApiAction.clearCheckIns();
        VenueApiAction.receiveVenue(data.venue);
        CheckInApiAction.receiveCheckIns(data.check_ins);
      })
    });
  }
};
