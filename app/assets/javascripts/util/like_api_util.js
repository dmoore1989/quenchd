window.LikeApiUtil = {
  createLike: function (like) {
    $.ajax({
      url: "/api/likes",
      type: "POST",
      data: like,
      dataType: "json",
      success: (function (data) {
        LikeApiAction.handleLike(data);
      })
    });
  }
};
