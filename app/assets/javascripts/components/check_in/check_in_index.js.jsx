window.CheckInIndex = React.createClass({
  getInitialState: function () {
    return ({checkIns: CheckInStore.all()});
  },

  componentDidMount: function () {
    CheckInStore.addChangeHandler(this.updateCheckIns);
    if (this.props.checkInData === BeerConstants.FETCH) {
      CheckInApiUtil.fetchCheckins(0, BeerConstants.STARTING_REQUESTS);
    }
  },

  componentWillUnmount: function () {
    CheckInStore.removeChangeHandler(this.updateCheckIns);
  },

  updateCheckIns: function () {
    this.setState({checkIns: CheckInStore.all()});
  },

  render: function () {
    if (this.state.checkIns) {
      return (
        <div>
          {this.state.checkIns.map(function(checkIn, idx){
            var beer = checkIn.beer;
            return (<CheckInItem
                      key={idx}
                      checkIn={checkIn}
                      beer={beer}/>
                    );
          }, this)}
        </div>
      );
    } else {
        return (<div></div>);
    }

  }
});
