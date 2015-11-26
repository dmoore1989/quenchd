window.BeerApiUtil = {
  fetchBeer: function (id, pageNumber) {
    $.ajax({
      url: "/api/beers/" + id,
      type: "GET",
      data: {page_number: pageNumber},
      dataType: "json",
      success:(function (data) {
        if (pageNumber === 1) {
          CheckInApiAction.clearCheckIns();
          BeerApiAction.receiveBeer(data.beer, data.likes);
        }
        CheckInApiAction.receiveCheckIns(data.check_ins);
      })
    });
  },

  createBeer: function (formData, callback) {
    $.ajax({
      url: "/api/beers",
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
