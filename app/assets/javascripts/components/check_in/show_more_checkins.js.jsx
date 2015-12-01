window.ShowMoreCheckins = React.createClass({
  getInitialState: function () {
    return ({pageNumber: 1, moreItems: true});
  },

  componentDidMount: function () {
    CheckInStore.addPageEndHandler(this.endOfPages);
  },

  componentWillUnmount: function () {
    CheckInStore.removePageEndHandler(this.endOfPages);
  },

  endOfPages: function () {
    this.setState({moreItems:false});
  },

  nextCheckInPage: function () {
    newPageNumber = this.state.pageNumber + 1;
    this.fetchMoreCheckIns(newPageNumber);
    this.setState({pageNumber: newPageNumber});
  },

  fetchMoreCheckIns: function (pageNumber) {
    switch (this.props.checkInData) {
      case QuenchdConstants.FETCH:
        CheckInApiUtil.fetchCheckins(pageNumber, this.props.type);
        break;
      case QuenchdConstants.USER:
        UserApiUtil.fetchUser(this.props.id, pageNumber);
        break;
      case QuenchdConstants.BEER:
        BeerApiUtil.fetchBeer(this.props.id, pageNumber);
        break;
      case QuenchdConstants.BREWERY:
        BreweryApiUtil.fetchBrewery(this.props.id, pageNumber);
        break;
      case QuenchdConstants.VENUE:
        VenueApiUtil.fetchVenue(this.props.id, pageNumber);
        break;
    }
  },

  render: function () {
    if (this.state.moreItems) {
      return (
        <button className="show-more button" onClick={this.nextCheckInPage}>
          Show More
        </button>
      );
    } else {
      return (<div className="show-more text">All Check-Ins Loaded!</div>);
    }
  }
});
