window.BeerApiUtil = {
  fetchBeer: function (id) {
    $.ajax({
      url: "/api/beers/" + id,
      type: "GET",
      dataType: "json",
      success:(function (data) {
        CheckInApiAction.receiveCheckIns(data.check_ins);
        BeerApiAction.receiveBeer(data.beer);
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
