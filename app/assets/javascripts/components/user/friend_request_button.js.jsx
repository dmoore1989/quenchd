window.FriendRequestButton = React.createClass({
  addRequest: function () {
    FriendRequestApiUtil.createNewRequest(this.props.id);
  },

  cancelRequest: function () {
    FriendRequestApiUtil.deleteRequest(this.props.id);
  },

  render: function () {
    switch (this.props.status) {
      case "stranger":
        return (<button onClick={this.addRequest}>Add Friend</button>);
      case "requested":
        return (<button onClick={this.cancelRequest}>Request Pending(Click to Cancel)</button>);
      case "pending":
        return (<button onClick={this.approveRequest}>Approve Friend Request</button>);
      case "friend":
        return (<button onClick={this.removeFriend}>Remove Friend</button>);
    }
    return (<div className="hidden"></div>);
  }
});
