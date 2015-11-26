window.PendingFriendRequests = React.createClass({
  render: function () {
    return (
      <ul>
        {this.props.approvals.map(function(approval){
          return
            <li>{approval.username}
              <button onClick={this.approveRequest}>✔</button>
              <button onClick={this.rejectRequest}>x</button>
            </li>;
        })}
      </ul>
    );
  }
});
