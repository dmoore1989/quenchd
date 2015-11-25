window.ShowMoreCheckins = React.createClass({
  getInitialState: function () {
    return ({pageNumber: 1});
  },

  nextCheckInPage: function () {
    newPageNumber = this.state.pageNumber + 1;
    CheckInApiUtil.fetchCheckins(newPageNumber);
    this.setState({pageNumber: newPageNumber});
  },

  render: function () {
    if (this.props.checkInData === QuenchdConstants.FETCH){
      return (
        <button className="show-more" onClick={this.nextCheckInPage}>
          Show More
        </button>
      );
    } else {
      return (<div></div>);
    }
  }
});
