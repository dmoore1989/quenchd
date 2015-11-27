window.PendingFriendRequests = React.createClass({
  approveRequest: function (e) {
    e.preventDefault();
    FriendApiUtil.approveRequest(e.currentTarget.id, "sidebarRequest");
  },

  rejectRequest: function (e) {
    e.preventDefault();
    FriendRequestApiUtil.rejectRequest(e.currentTarget.id);
  },



  render: function () {
    return (
      <div className="sidebar-applet">
        <div className="sidebar-applet-header">
          <h4>Friend Requests</h4>
        </div>
        <ul className="approval-list">
          {this.props.approvals.map(function(approval){
            return (
              <li className= "approval-list-item group" key={approval.requester.id}>
                <a href={"/#/users/"+approval.requester.id}><img src={approval.requesterImage} /></a>
                <div className= "approval-list-name">
                  <h5>{approval.requester.username}</h5>
                  <p>{approval.requester.location}</p>
                </div>
                <div className= "approval-list-button">
                  <button
                    id={approval.requester.id}
                    onClick={this.approveRequest}
                    className="approve-button">✔
                  </button>
                  <button
                    id={approval.requester.id}
                    onClick={this.rejectRequest}
                    className="reject-button">x
                  </button>
                </div>
              </li>
            );
          },this)}
        </ul>
      </div>
    );
  }
});
