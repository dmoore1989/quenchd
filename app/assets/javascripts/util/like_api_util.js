window.LikeApiUtil = {
  createLike: function (like) {
    $.ajax({
      url: "/api/likes",
      type: "POST",
      data: like,
      dataType: "json",
      success: (function (data) {
        if (like.like.likeable_type === "CheckIn") {
          CheckInApiAction.receiveCheckIn(data);
        } else {
          LikeApiAction.receiveLike(data);
        }
      })
    });
  },

  deleteLike: function (likeId) {
    $.ajax({
      url: "/api/likes/" + likeId,
      type: "DELETE",
      dataType: "json",
      success: (function (data) {
        debugger
        if (like.like && like.like.likeable_type === "CheckIn") {
          CheckInApiAction.receiveCheckIn(data);
        } else {
          LikeApiAction.deleteLike();
        }
      })
    });
  }
};
