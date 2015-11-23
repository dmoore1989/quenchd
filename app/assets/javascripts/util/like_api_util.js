window.LikeApiUtil = {
  createLike: function (like) {
    $.ajax({
      url: "/api/likes",
      type: "POST",
      data: like,
      dataType: "json",
      success: (function (data) {
        CheckInApiAction.receiveCheckIn(data);
      })
    });
  },

  deleteLike: function (likeId) {
    $.ajax({
      url: "/api/likes/" + likeId,
      type: "DELETE",
      dataType: "json",
      success: (function (data) {
        CheckInApiAction.receiveCheckIn(data);
      })
    });
  }
};
