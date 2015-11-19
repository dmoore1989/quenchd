window.ShowMoreCheckins = React.createClass({
  getInitialState : function () {
    return ({checkInCount: BeerConstants.STARTING_REQUESTS});
  },

  render: function () {
    return (
      <div onClick={this.fetchMoreCheckIns}>
        Show More
      </div>
    );
  }
});
