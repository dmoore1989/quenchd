window.FriendRequestButton = React.createClass({
  addRequest: function () {
    FriendRequestApiUtil(this.props.userId);
  },

  approveRequest: function () {

  },

  render: function () {
    switch (this.props.status) {
      case "stranger":
        return (<button onClick={this.addRequest}>Add Friend</button>);
      case "requested":
        return (<button>Request Pending</button>);
      case "pending":
        return (<button onClick={this.approveRequest}>Approve Friend Request</button>);
      case "friend":
        return (<button onClick={this.removeFriend}>Remove Friend</button>);
    }
    return (<div className="hidden"></div>);
  }
});
