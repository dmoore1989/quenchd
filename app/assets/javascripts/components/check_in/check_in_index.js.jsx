window.CheckInIndex = React.createClass({
  getInitialState: function () {
    return ({checkIns: CheckInStore.all()});
  },

  componentDidMount: function () {
    CheckInStore.addChangeHandler(this.updateCheckIns);
    if (this.props.checkInData === BeerConstants.FETCH) {
      CheckInApiUtil.fetchCheckins();
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
          {this.state.checkIns.map(function(checkIn){
            var beer = checkIn.beer;
            return (<CheckInItem
                      checkIn={checkIn}
                      beer={beer}/>);
          }, this)}
        </div>
      );
    } else {
        return (<div></div>);
    }

  }
});
