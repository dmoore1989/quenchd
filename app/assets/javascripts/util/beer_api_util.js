window.BeerApiUtil = {
  fetchBeer: function(id) {
    $.ajax({
      url: "/api/beers/" + id,
      type: "GET",
      dataType: "json",
      success:(function (data) {
        BeerApiAction.receiveBeer(data);
      })
    });
  }
};
