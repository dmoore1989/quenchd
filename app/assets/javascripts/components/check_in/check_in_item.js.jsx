window.CheckInItem = React.createClass({
  render: function () {
    var user = this.props.checkIn.user.username;

    return (
      <div>
        <h4>{user} is drinking a {this.props.beer}</h4>
      </div>
    );
  }
});
