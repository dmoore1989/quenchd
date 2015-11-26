window.BreweryApiUtil = {
  fetchBrewery: function (id, pageNumber) {
    $.ajax({
      url: "/api/breweries/" + id,
      type: "GET",
      dataType: "json",
      data: {page_number: pageNumber},
      success:(function (data) {
        if (pageNumber === 1) {
          CheckInApiAction.clearCheckIns();
          BreweryApiAction.receiveBrewery(data.brewery, data.likes);
        }
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
