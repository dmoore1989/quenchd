window.ShowMoreCheckins = React.createClass({
  getInitialState: function () {
    return ({pageNumber: 1, moreItems: true});
  },

  componentDidMount: function () {
    CheckInStore.addPageEndHandler(this.endOfPages);
  },

  componentWillUnmount: function () {
    CheckInStore.removePageEndHandler(this.endOfPages);
  },

  endOfPages: function () {
    this.setState({moreItems:false});
  },

  nextCheckInPage: function () {
    newPageNumber = this.state.pageNumber + 1;
    this.fetchMoreCheckIns();
    this.setState({pageNumber: newPageNumber});
  },

  fetchMoreCheckIns: function () {
    switch (this.props.checkInData) {
      case QuenchdConstants.FETCH:
        CheckInApiUtil.fetchCheckins(this.state.pageNumber);
        break;
      case QuenchdConstants.USER:
        UserApiUtil.fetchMoreCheckIns(this.state.pageNumber);
        break;
    }
  },

  render: function () {
    if (this.state.moreItems) {
      return (
        <button className="show-more" onClick={this.nextCheckInPage}>
          Show More
        </button>
      );
    } else {
      return (<div>All Check-Ins Loaded!</div>);
    }
  }
});
