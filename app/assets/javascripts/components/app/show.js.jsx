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
        UserApiUtil.fetchUser(modelParams.userId, 1);
        break;
      case QuenchdConstants.BEER:
        BeerApiUtil.fetchBeer(modelParams.beerId, 1);
        break;
      case QuenchdConstants.BREWERY:
        BreweryApiUtil.fetchBrewery(modelParams.breweryId, 1);
        break;
      case QuenchdConstants.VENUE:
        VenueApiUtil.fetchVenue(modelParams.venueId, 1);
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
        return (<UserHeader item={this.state.item} />);
      case QuenchdConstants.BEER:
        return (<BeerHeader item={this.state.item} />);
      case QuenchdConstants.BREWERY:
        return (<BreweryHeader item={this.state.item} />);
      case QuenchdConstants.VENUE:
        return (<VenueHeader item={this.state.item} />);
    }
  },

  renderSidebar: function () {
    switch (this.props.route.type) {
      case QuenchdConstants.USER:
        return (<UserSidebarElements user={this.state.item.user} />);
      case QuenchdConstants.BEER:
        return (<BeerSidebarElements beer={this.state.item.beer} />);
      case QuenchdConstants.BREWERY:
        return (<BrewerySidebarElements brewery={this.state.item.brewery} />);
    }
  },

  render: function () {
    if (this.state.item){
      return (
        <div>
          <div className="primary">
            {this.renderHeader()}
            <CheckInIndex
              checkInData={this.props.route.type}
              id={this.state.item.id}/>
          </div>
          <div className="sidebar">
            {this.renderSidebar()}
          </div>
        </div>
      );
    }
    else {
      return (<div>LOADING</div>);
    }
  }
});
