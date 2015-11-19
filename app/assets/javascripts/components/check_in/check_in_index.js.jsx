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

  deleteCheckIn: function () {
    CheckInApiUtil.deleteCheckIn(this.props.checkIn.id);
  },

  checkInItems: function () {
    var checkInItems = [];
    for (var id in this.state.checkIns) {
      var checkIn = this.state.checkIns[id];
      var beer = this.state.checkIns[id].beer;
       checkInItems.push(
         <div>
            <CheckInItem
              key={id}
              checkIn={checkIn}
              beer={beer}/>
            <button onClick={this.deleteCheckIn}>Delete This Check-In</button>
          </div>
        );
    }
    return checkInItems;
  },

  render: function () {
    if (this.state.checkIns) {
      return (
        <div>
          {this.checkInItems().map(function (checkInItem) {
            return checkInItem;
          })}
          <ShowMoreCheckins onClick={this.fetchMoreCheckIns} />
        </div>
      );
    } else {
        return (<div></div>);
    }

  }
});
