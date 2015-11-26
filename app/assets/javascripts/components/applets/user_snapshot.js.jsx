window.UserSnapshot = React.createClass({

  render: function () {
    debugger
    return (
      <div>
        <div>{this.props.user.username}</div>
        <div>{this.props.user.count}</div>
        <div>{this.props.user.uniqueCount}</div>
      </div>
    );
  }
});
