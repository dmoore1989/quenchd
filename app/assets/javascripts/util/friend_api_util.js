window.FriendApiUtil = {
  approveRequest: function (friendId) {
    $.ajax({
      url: "/api/friends",
      type: "POST",
      dataType: "json",
      data: ({friend_id: friendId}),
      success:(function (data) {
        UserApiAction.receiveNewStatus(data.status);
      })
    });
  },

  deleteFriendship: function (userId) {
    $.ajax({
      url: "/api/friends/delete/?user_id=" + userId,
      type: "DELETE",
      dataType: "json",
      success:( function (data) {
        debugger
        UserApiAction.receiveNewStatus(data.status);
      })
    });
  }
};
