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
          <PendingFriendRequests approvals={this.state.user.user.approvals} />
        </div>
      );} else {
        return (<div></div>);
      }
   }

});
