window.UserHeader = React.createClass({
  render: function () {
    return (
      <div>
        <h1>{this.props.user.username}</h1>
        <ul>
          <li>{this.props.user.location}</li>
          <li>{this.props.user.website}</li>
        </ul>
      </div>
    );
  }
});
