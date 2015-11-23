window.BrewerApiUtil = {
  fetchBrewer: function () {
    $.ajax({
      url: "/api/breweries/" + id,
      type: "GET",
      dataType: "json",
      success:(function (data) {
        CheckInApiAction.receiveCheckIns(data.check_ins);
        Brewery.receiveBeer(data.brewery);
      })
    });
  }
};
