window.BeerHeader = React.createClass({
  getInitialState: function () {
    return ({
      checkInForm: "hidden"
    });
  },

  renderCheckInModal: function () {
    var klass = ((this.state.checkInForm === "hidden") ? "visible" : "hidden");
    this.setState({checkInForm: klass});
  },

  render: function () {
    return (
      <div>
        <h1>{this.props.beer.name}</h1>
        <h3>{this.props.beer.style}</h3>
        <colgroup>
          <col>{this.props.beer.abv}</col>
          <col>{this.props.beer.ibu}</col>
        </colgroup>
        <button onClick={this.renderCheckInModal}>
            Check In to This Beer
        </button>
        <div className={this.state.checkInForm} >
          <CheckInForm
            beer={this.props.beer} />
        </div>
      </div>
    );
  }
});
