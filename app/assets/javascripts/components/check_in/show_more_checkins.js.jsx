window.ShowMoreCheckins = React.createClass({
  getInitialState : function () {
    return ({checkInCount: BeerConstants.STARTING_REQUESTS});
  },

  fetchMoreCheckIns: function () {
    start = this.state.checkInCount + 1;
    stop = this.state.checkInCount + 10;
    CheckInApiUtil.fetchMoreCheckIns(start, stop);
    this.setState({checkInCount: stop});
  },

  render: function () {
    return (
      <div onClick={this.fetchMoreCheckIns}>
        Show More
      </div>
    );
  }
});
