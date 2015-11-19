window.CheckInIndex = React.createClass({
  getInitialState: function () {
    return ({checkIns: CheckInStore.all()});
  },

  componentDidMount: function () {
    CheckInStore.addChangeHandler(this.updateCheckIns);
    if (this.props.checkInData === QuenchdConstants.FETCH) {
      CheckInApiUtil.fetchCheckins(0, QuenchdConstants.STARTING_REQUESTS);
    }
  },

  componentWillUnmount: function () {
    CheckInStore.removeChangeHandler(this.updateCheckIns);
  },

  updateCheckIns: function () {
    this.checkInAmount = CheckInStore.all().count;
    this.setState({checkIns: CheckInStore.all()});
  },

  fetchMoreCheckIns: function () {
    var start = this.checkInAmount + 1;
    var stop = this.checkInAmount + 10;
    CheckInApiUtil.fetchMoreCheckIns(start, stop);
  },

  checkInItems: function () {
    for (var id in this.state.checkIns) {
      var beer = this.state.checkIns[id].beer;
       (<CheckInItem
                key={id}
                checkIn={this.state.checkIns[checkInId]}
                beer={beer}/>
              );
    }
  },

  render: function () {
    if (this.state.checkIns) {
      return (
        <div>
          {this.checkInItems()}
          <ShowMoreCheckins onClick={this.fetchMoreCheckIns} />
        </div>
      );
    } else {
        return (<div></div>);
    }

  }
});
