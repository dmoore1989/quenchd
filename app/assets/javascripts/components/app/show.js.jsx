window.Show = React.createClass({
  getInitialState: function () {
    return ({item: null});
  },

  componentDidMount: function () {
    ShowStore.addChangeHandler(this.setShow);
    this.fetchItem();
  },

  fetchItem: function () {
    switch (this.props.route.type) {
      case QuenchdConstants.USER:
        UserApiUtil.fetchUser(this.props.params.userId);
        break;
    }
  },


  componentWillUnmount: function () {
    ShowStore.removeChangeHandler(this.setShow);
  },


  setShow: function() {
    this.setState({item: ShowStore.item()});
  },

  renderHeader: function () {
    switch (this.props.route.type) {
      case QuenchdConstants.USER:
        return (<UserHeader user={this.state.item} />);
    }
  },

  render: function () {
    if (this.state.item){
      return(
        <div>
          {this.renderHeader()}
          <CheckInIndex
            checkInData={QuenchdConstants.ASSOCIATION}/>
        </div>);
    }
    else {
      return (<div></div>);
    }
  }
});
