window.BeerShow = React.createClass({
  displayName: "BeerShow",

  getInitialState: function () {
    return {
      beer: undefined,
      checkInForm: "hidden"
    };
  },

  componentDidMount: function () {
    BeerStore.addChangeHandler(this.setBeer);
    BeerApiUtil.fetchBeer(this.props.params.beerId);
  },

  componentWillUnmount: function () {
    BeerStore.removeChangeHandler(this.setBeer);
  },

  setBeer: function () {
    this.setState({ beer: BeerStore.beer() });
  },

  renderCheckInModal: function () {
    var klass = this.state.checkInForm === "hidden" ? "visible" : "hidden";
    this.setState({ checkInForm: klass });
  },

  render: function () {
    if (this.state.beer) {

      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          this.state.beer.name
        ),
        React.createElement(
          "h3",
          null,
          this.state.beer.style
        ),
        React.createElement(
          "colgroup",
          null,
          React.createElement(
            "col",
            null,
            this.state.beer.abv
          ),
          React.createElement(
            "col",
            null,
            this.state.beer.ibu
          )
        ),
        React.createElement(
          "button",
          { onClick: this.renderCheckInModal },
          "Check In to This Beer"
        ),
        React.createElement(
          "div",
          { className: this.state.checkInForm },
          React.createElement(CheckInForm, {
            beer: this.state.beer })
        ),
        React.createElement(CheckInIndex, {
          checkInData: QuenchdConstants.ASSOCIATION })
      );
    } else {
      return React.createElement("div", null);
    }
  }
});