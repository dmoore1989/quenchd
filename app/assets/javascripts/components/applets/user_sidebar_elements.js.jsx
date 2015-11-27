window.UserSidebarElements = React.createClass({
  render: function () {
    if (this.props.user) {
      return (
        <div className>
          <div className="filler"></div>
          <FriendImages friends={this.props.user.friends} />
          <LikeImages likes={this.props.user.likes} />
        </div>
      );
    } else {
      return (<div></div>);
    }
  }

});
