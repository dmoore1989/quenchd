window.BreweryApiUtil = {
  fetchBrewery: function (id) {
    $.ajax({
      url: "/api/breweries/" + id,
      type: "GET",
      dataType: "json",
      success:(function (data) {
        CheckInApiAction.receiveCheckIns(data.check_ins);
        BreweryApiAction.receiveBrewery(data.brewery);
      })
    });
  }
};
