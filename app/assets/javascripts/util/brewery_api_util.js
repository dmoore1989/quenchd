window.BreweryApiUtil = {
  fetchBrewery: function (id) {
    $.ajax({
      url: "/api/breweries/" + id,
      type: "GET",
      dataType: "json",
      success:(function (data) {
        BreweryApiAction.receiveBrewery(data.brewery);
        CheckInApiAction.receiveCheckIns(data.check_ins);
      })
    });
  }
};
