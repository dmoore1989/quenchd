window.BreweryApiUtil = {
  fetchBrewery: function (id) {
    $.ajax({
      url: "/api/breweries/" + id,
      type: "GET",
      dataType: "json",
      success:(function (data) {
        CheckInApiAction.clearCheckIns();
        BreweryApiAction.receiveBrewery(data.brewery, data.likes);
        CheckInApiAction.receiveCheckIns(data.check_ins);
      })
    });
  },

  createBrewery: function (formData, callback) {
    $.ajax({
      url: "/api/breweries",
      type: "POST",
      processData: false,
      contentType: false,
      data: formData,
      dataType: "json",
      success: (function(data) {
        callback && callback(data.id);
      })
    });
  }
};
