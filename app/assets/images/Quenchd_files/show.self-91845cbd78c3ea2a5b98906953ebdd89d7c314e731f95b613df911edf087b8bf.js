window.Show = React.createClass({
  displayName: "Show",

  getInitialState: function () {
    return { item: null };
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
      case QuenchdConstants.VENUE:
        VenueApiUtil.fetchVenue(modelParams.venueId);
        break;
    }
  },

  componentWillUnmount: function () {
    ShowStore.removeChangeHandler(this.setShow);
  },

  componentWillReceiveProps: function (newProps) {
    this.fetchItem(newProps.route.type, newProps.params);
  },

  setShow: function () {
    this.setState({ item: ShowStore.item() });
  },

  renderHeader: function () {
    switch (this.props.route.type) {
      case QuenchdConstants.USER:
        return React.createElement(UserHeader, { item: this.state.item });
      case QuenchdConstants.BEER:
        return React.createElement(BeerHeader, { item: this.state.item });
      case QuenchdConstants.BREWERY:
        return React.createElement(BreweryHeader, { item: this.state.item });
      case QuenchdConstants.VENUE:
        return React.createElement(VenueHeader, { item: this.state.item });
    }
  },

  render: function () {
    if (this.state.item) {
      return React.createElement(
        "div",
        null,
        this.renderHeader(),
        React.createElement(CheckInIndex, {
          checkInData: QuenchdConstants.ASSOCIATION })
      );
    } else {
      return React.createElement(
        "div",
        null,
        "LOADING"
      );
    }
  }
});