window.Show = React.createClass({
  getInitialState: function () {
    return ({item: null});
  },

  componentDidMount: function () {
    ShowStore.addChangeHandler(this.setShow);
    this.fetchItem();
  },

  fetchItem: function (newType, newParams) {
    var modelType = newType || this.props.route.type;
    var modelParams = newParams || this.props.params;
    switch (modelType) {
      case QuenchdConstants.USER:
        UserApiUtil.fetchUser(modelParams.userId);
        break;
      case QuenchdConstants.BEER:
        BeerApiUtil.fetchBeer(modelParams.beerId);
        break;
      case QuenchdConstants.BREWERY:
        BreweryApiUtil.fetchBrewery(modelParams.breweryId);
        break;

    }
  },


  componentWillUnmount: function () {
    ShowStore.removeChangeHandler(this.setShow);
  },

  componentWillReceiveProps: function (newProps) {
    this.fetchItem(newProps.route.type, newProps.params);
  },


  setShow: function() {
    this.setState({item: ShowStore.item()});
  },

  renderHeader: function () {
    switch (this.props.route.type) {
      case QuenchdConstants.USER:
        return (<UserHeader user={this.state.item} />);
      case QuenchdConstants.BEER:
        return (<BeerHeader beer={this.state.item} />);
      case QuenchdConstants.BREWERY:
        return (<BreweryHeader brewery={this.state.item} />);
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
