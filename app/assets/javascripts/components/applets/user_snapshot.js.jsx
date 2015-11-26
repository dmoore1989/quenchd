window.UserSnapshot = React.createClass({
  getInitialState: function () {
    return ({user: null});
  },

  componentDidMount: function () {
    ShowStore.addChangeHandler(this.setUser);
    UserApiUtil.fetchUser(currentUserId, 1);
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
          <div>{this.state.user.user.username}</div>
          <div>{this.state.user.user.count}</div>
          <div>{this.state.user.user.uniqueCount}</div>
        </div>);
    } else {
        return (<div></div>);
      }

   }
});
