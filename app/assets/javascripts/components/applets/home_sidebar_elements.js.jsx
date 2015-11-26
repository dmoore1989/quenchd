window.HomeSidebarElements = React.createClass({
  getInitialState: function () {
    return ({user: null});
  },

  componentDidMount: function () {
    ShowStore.addChangeHandler(this.setUser);
    UserApiUtil.fetchSidebarInfo(currentUserId);
  },

  componentWillUnmount: function () {
    ShowStore.removeChangeHandler(this.setUser);
  },

  setUser: function () {
     this.setState({user: ShowStore.item()});
   },

  render: function () {
    if (this.state.user) {
      return (
        <div>
          <UserSnapshot user={this.state.user.user} />
          <PendingFriendRequests friends={this.state.user.friends} />
        </div>
      );} else {
        return (<div></div>);
      }
   }

});
