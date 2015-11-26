window.FriendRequestApiUtil = {
  createNewRequest: function (friendId) {
    $.ajax({
      url: "/api/friend_requests",
      type: "POST",
      dataType:"json",
      data: ({request: friendId}),
      success:(function (data) {
        UserApiAction.receiveNewStatus(data.status);
      })

    });
  },

  deleteRequest: function (requestId) {
    $.ajax({
      url: "/api/friend_requests/" + requestId,
      type: "DELETE",
      dataType: "json",
      success:( function () {
        UserApiAction.receiveNewStatus(data.status);
      })
    });
  }
};
