window.ShowMoreCheckins = React.createClass({
  getInitialState : function () {
    return ({checkInCount: BeerConstants.STARTING_REQUESTS});
  },

  fetchMoreCheckIns: function () {
    start = this.state.checkInCount + 1;
    finish = this.state.checkInCount + 10;
    CheckInApi.fetchCheckins(start, stop);
  },

  render: function () {
    return (
      <div onClick={this.fetchMoreCheckIns}>
        Show More
      </div>
    );
  }
});
