window.UserShow = React.createClass({
  displayName: "UserShow",

  getInitialState: function () {
    return { user: undefined };
  },

  componentDidMount: function () {
    UserStore.addChangeHandler(this.setUser);
    UserApiUtil.fetchUser(this.props.params.userId);
  },

  componentWillUnmount: function () {
    UserStore.removeChangeHandler(this.setUser);
  },

  setUser: function () {
    this.setState({ user: UserStore.user() });
  },

  render: function () {
    if (this.state.user) {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          this.state.user.username
        ),
        React.createElement(
          "colgroup",
          null,
          React.createElement(
            "col",
            null,
            this.state.user.location
          ),
          React.createElement(
            "col",
            null,
            this.state.user.website
          )
        ),
        React.createElement(CheckInIndex, {
          checkInData: QuenchdConstants.ASSOCIATION })
      );
    } else {
      return React.createElement("div", null);
    }
  }
});