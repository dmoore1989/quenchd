window.UserShow = React.createClass({
  getInitialState: function () {
    return ({user: undefined});
  },

  componentDidMount: function () {
    UserStore.addChangeHandler(this.setUser);
    UserApiUtil.fetchUser(this.props.params.userId);
  },

  componentWillUnmount: function () {
    UserStore.removeChangeHandler(this.setUser);
  },


  setUser: function() {
    this.setState({user: UserStore.user()});
  },

  render: function () {
    if (this.state.user){
      return(
        <div>
          <h1>{this.state.user.username}</h1>
          <colgroup>
            <col>{this.state.user.location}</col>
            <col>{this.state.user.website}</col>
          </colgroup>
          <CheckInIndex
            checkInData={BeerConstants.ASSOCIATION}/>
        </div>);
    }
    else {
      return (<div></div>);
    }
  }
});
