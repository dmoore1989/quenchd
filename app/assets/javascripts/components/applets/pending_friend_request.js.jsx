window.PendingFriendRequests = React.createClass({
  approveRequest: function (e) {
    e.preventDefault();
    FriendApiUtil.approveRequest(e.currentTarget.id, "sidebarRequest");
  },

  rejectRequest: function () {
    debugger
  },

  render: function () {
    return (
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
    );
  }
});
