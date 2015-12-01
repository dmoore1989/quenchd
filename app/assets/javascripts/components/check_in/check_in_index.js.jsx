window.CheckInIndex = React.createClass({
  getInitialState: function () {
    return ({
      checkIns: CheckInStore.all(),
    });
  },

  componentDidMount: function () {
    CheckInStore.addChangeHandler(this.updateCheckIns);
    if (this.props.checkInData === QuenchdConstants.FETCH) {
      CheckInApiAction.clearCheckIns();
      CheckInApiUtil.fetchCheckins(1, this.props.type);
    }
  },

  componentWillUnmount: function () {
    CheckInStore.removeChangeHandler(this.updateCheckIns);
  },

  updateCheckIns: function () {
    this.checkInAmount = CheckInStore.all().count;
    this.setState({checkIns: CheckInStore.all()});
  },

  render: function () {
    if (this.state.checkIns.length > 0) {
      return (
        <div className="content">
          {this.state.checkIns.map(function(checkIn, idx){
            var beer = checkIn.beer;
            return (<CheckInItem
                      key={idx}
                      checkIn={checkIn}
                      beer={beer}/>
                    );
          }, this)}
          <ShowMoreCheckins
            checkInData={this.props.checkInData}
            id={this.props.id}/>
        </div>
      );
    } else {
        return (
          <div>
          </div>);
    }

  }
});
