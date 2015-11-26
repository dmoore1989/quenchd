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
  }
};
