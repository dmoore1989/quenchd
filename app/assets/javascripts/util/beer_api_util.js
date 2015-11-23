window.BeerApiUtil = {
  fetchBeer: function (id) {
    $.ajax({
      url: "/api/beers/" + id,
      type: "GET",
      dataType: "json",
      success:(function (data) {
        BeerApiAction.receiveBeer(data.beer);
        CheckInApiAction.receiveCheckIns(data.check_ins);
      })
    });
  },

  createBeer: function (beer) {
    $.ajax({
      url: "/api/beers",
      type: "POST",
      data: beer,
      dataType: "json",
      success: (function(data) {
        BeerApiAction.receiveBeer(data);
      })
    });
  }

};
