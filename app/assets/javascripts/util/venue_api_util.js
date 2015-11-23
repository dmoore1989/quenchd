window.VenueApiUtil = {
  fetchVenue: function (id) {
    $.ajax({
      url: "/api/venues/" + id,
      type: "GET",
      dataType: "json",
      success: (function (data) {
        VenueApiAction.receiveVenue(data.venue);
      })
    });
  }
}
