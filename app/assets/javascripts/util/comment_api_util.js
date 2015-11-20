window.CommentApiUtil = {
  createComment: function (comment) {
    $.ajax({
      url: "/api/comments",
      type: "POST",
      dataType: "json",
      data: {comment: comment},
      success: (function (data) {
        CheckInApiAction.receiveCheckIn(data);
      })
    });
  },

  deleteComment: function (commentId) {
    $.ajax({
      url: "/api/comments/" + commentId,
      type: "DELETE",
      dataType: "json",
      success: (function (data) {
          CheckInApiAction.receiveCheckIn(data);
      })
    });
  }


};
