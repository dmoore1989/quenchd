window.FriendRequestButton = React.createClass({
  addRequest: function () {
    FriendRequestApiUtil.createNewRequest(this.props.id);
  },

  cancelRequest: function () {
    FriendRequestApiUtil.deleteRequest(this.props.id);
  },

  approveRequest: function () {
    FriendApiUtil.approveRequest(this.props.id);
  },

  removeFriend: function () {
    FriendApiUtil.deleteFriendship(this.props.id);
  },

  render: function () {
    switch (this.props.status) {
      case "stranger":
        return (<button className="request stranger" onClick={this.addRequest}>
          <h5>Add Friend</h5>
          </button>
        );
      case "requested":
        return (<button className="request requested" onClick={this.cancelRequest}>
          <h5>Request Pending</h5>
          <small>(Click to Cancel)</small>
          </button>
        );
      case "pending":
        return (<button className="request pending" onClick={this.approveRequest}>
          <h5>Approve Friend Request</h5>
          </button>
        );
      case "friend":
        return (<button className="request friend" onClick={this.removeFriend}>
          <h5>Remove Friend</h5>
          </button>
        );
    }
    return (<div className="hidden"></div>);
  }
});
