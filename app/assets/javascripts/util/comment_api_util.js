window.CommentApiUtil = {
  // Successful requests to the comment controller will return the
  // associated Check In for Flux/React to manipulate.
  //

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
  },

  editComment: function (comment) {
    $.ajax({
      url: "/api/comments/" + comment.id,
      type: "PUT",
      dataType: "json",
      data: {comment: comment},
      success: (function (data) {
        CheckInApiAction.receiveCheckIn(data);
      })
    });
  }

};
