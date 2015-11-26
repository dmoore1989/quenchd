window.UserSnapshot = React.createClass({

  render: function () {
    return (
      <div>
        <div>{this.props.user.username}</div>
        <div>{this.props.user.count}</div>
        <div>{this.props.user.uniqueCount}</div>
      </div>
    );
  }
});
