window.FriendRequest = {
  createNewRequest: function (friendId) {
    $.ajax({
      url: "/friend_requests",
      type: "POST",
      dataType:"json",
      data: ({friendId: friendId}),
      success:(function (data) {
      })

    });
  },

  deleteRequest: function (requestId) {
    $.ajax({
      url: "/friend_requests/" + requestId,
      type: "DELETE",
      dataType: "json",
      success:( function () {
      })
    });
  }
};
