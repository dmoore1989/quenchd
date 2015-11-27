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
          <div>{this.props.user.friendCount}</div>


          <li><p>count</p><h5>{brewery.check_ins}</h5></li>
          <li><p>unique</p><h5>{brewery.uniq_check_ins}</h5></li>
          <li><p>beer score</p><h5>{brewery.monthly}</h5></li>
          <li><p>friends</p><h5><a
            className="link"
            href="#">{brewery.current_user_check_in}</a></h5></li>
        </ul>
      </div>
    );
  }
});
