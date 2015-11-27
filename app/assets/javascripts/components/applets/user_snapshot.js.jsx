window.UserSnapshot = React.createClass({

  render: function () {
    return (
      <div className="sidebar-applet">
        <div className="sidebar-applet-header">
          <div><h4>{this.props.user.username}</h4></div>
          <div><h6>{this.props.user.email}</h6></div>
          <div><h6>{this.props.user.location}</h6></div>
        </div>
          <div>{this.props.user.count}</div>
          <div>{this.props.user.uniqueCount}</div>
          
      </div>
    );
  }
});
