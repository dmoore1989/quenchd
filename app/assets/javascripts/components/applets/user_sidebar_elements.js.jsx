window.UserSidebarElements = React.createClass({
  render: function () {
    return (
      <div>
        <div className="filler"></div>
        <FriendImages friends={this.props.user.friends} />
        <LikeImages likes={this.props.user.likes} />
      </div>
    );
  }

});
