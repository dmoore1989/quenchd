window.CheckInIndex = React.createClass({
  displayName: "CheckInIndex",

  getInitialState: function () {
    return {
      checkIns: CheckInStore.all()
    };
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
    this.setState({ checkIns: CheckInStore.all() });
  },

  fetchMoreCheckIns: function () {
    var start = this.checkInAmount + 1;
    var stop = this.checkInAmount + 10;
    CheckInApiUtil.fetchMoreCheckIns(start, stop);
  },

  render: function () {
    if (this.state.checkIns) {
      return React.createElement(
        "div",
        { className: "content" },
        this.state.checkIns.map(function (checkIn, idx) {
          var beer = checkIn.beer;
          return React.createElement(CheckInItem, {
            key: idx,
            checkIn: checkIn,
            beer: beer });
        }, this),
        React.createElement(ShowMoreCheckins, { onClick: this.fetchMoreCheckIns })
      );
    } else {
      return React.createElement("div", null);
    }
  }
});