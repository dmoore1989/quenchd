window.CheckInIndex = React.createClass({
  getInitialState: function () {
    return ({
      checkIns: CheckInStore.all(),
    });
  },

  componentDidMount: function () {
    CheckInStore.addChangeHandler(this.updateCheckIns);
    if (this.props.checkInData === QuenchdConstants.FETCH) {
      CheckInApiUtil.fetchCheckins(1);
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


  render: function () {
    if (this.state.checkIns) {
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
