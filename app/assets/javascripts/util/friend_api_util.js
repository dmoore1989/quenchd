window.FriendApiUtil = {
  approveRequest: function (friendId, sidebarRequest) {
    $.ajax({
      url: "/api/friends",
      type: "POST",
      dataType: "json",
      data: ({friend_id: friendId}),
      success:(function (data) {
        UserApiAction.receiveNewStatus(data.status);
        if (sidebarRequest) {
          UserApiUtil.fetchSidebarInfo(currentUserId);
        }
      })
    });
  },

  deleteFriendship: function (userId) {
    $.ajax({
      url: "/api/friends/delete/?user_id=" + userId,
      type: "DELETE",
      dataType: "json",
      success:( function (data) {
        UserApiAction.receiveNewStatus(data.status);
      })
    });
  }
};
