window.PendingFriendRequests = React.createClass({
  approveRequest: function (e) {
    e.preventDefault();
    FriendApiUtil.approveRequest(e.currentTarget.id, "sidebarRequest");
  },

  rejectRequest: function (e) {
    e.preventDefault();
    FriendRequestApiUtil.rejectRequest(e.currentTarget.id);
  },

  friendRequests: function () {

  },

  render: function () {
    return (
      <div className="sidebar-applet">
        <div className="sidebar-applet-header">
          <h4>Friend Requests</h4>
        </div>
        <ul>
          {this.props.approvals.map(function(approval){
            return (
              <li key={approval.id}>{approval.username}
                <button id={approval.id} onClick={this.approveRequest}>✔</button>
                <button id={approval.id} onClick={this.rejectRequest}>x</button>
              </li>
            );
          },this)}
        </ul>
      </div>
    );
  }
});
