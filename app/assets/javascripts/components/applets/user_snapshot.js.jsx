window.UserSnapshot = React.createClass({

  beerScore: function () {
    return 9000;
  },

  render: function () {
    return (
      <div className="sidebar-applet">
        <div className="sidebar-applet-header">
          <h4>{this.props.user.username}</h4>
          <h6>{this.props.user.email}</h6>
          <h6>{this.props.user.location}</h6>
        </div>


        <ul className="check-in-stats group">
          <li><p>count</p><h5>{this.props.user.count}</h5></li>
          <li><p>unique</p><h5>{this.props.user.uniqueCount}</h5></li>
          <li><p>beer score</p><h5>{this.beerScore()}</h5></li>
          <li><p>friends</p><h5><a
            className="link"
            href="#">{this.props.user.friendCount}</a></h5></li>
        </ul>
      </div>
    );
  }
});
