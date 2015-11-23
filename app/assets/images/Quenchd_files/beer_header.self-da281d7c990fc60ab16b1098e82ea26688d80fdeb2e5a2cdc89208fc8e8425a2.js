window.BeerHeader = React.createClass({
  displayName: "BeerHeader",

  getInitialState: function () {
    return {
      checkInForm: "hidden"
    };
  },

  closeModal: function (e) {
    if (e.target.className === "modal") {
      this.modalToggle();
    }
  },

  modalToggle: function () {
    var klass = this.state.checkInForm === "hidden" ? "modal" : "hidden";
    this.setState({ checkInForm: klass });
  },

  render: function () {
    if (this.props.item.beer) {
      var beer = this.props.item.beer;
      return React.createElement(
        "div",
        { className: "show-header" },
        React.createElement(
          "section",
          { className: "header-top-bar group" },
          React.createElement("div", { className: "thumbnail" }),
          React.createElement(
            "div",
            { className: "title" },
            React.createElement(
              "h3",
              null,
              beer.name
            ),
            React.createElement(
              "h4",
              null,
              beer.brewery.name
            ),
            React.createElement(
              "h6",
              null,
              beer.style
            )
          ),
          React.createElement("div", { className: "check-in-stats" })
        ),
        React.createElement(
          "ul",
          { className: "detail-bar group" },
          React.createElement(
            "li",
            null,
            "ABV: ",
            beer.abv
          ),
          React.createElement(
            "li",
            null,
            "IBU: ",
            beer.ibu
          ),
          React.createElement(
            "li",
            null,
            React.createElement(
              "div",
              null,
              "This will be the ratings"
            )
          ),
          React.createElement(
            "li",
            null,
            "10,250 RATINGS"
          ),
          React.createElement(
            "li",
            null,
            "CREATED:",
            beer.create
          )
        ),
        React.createElement(
          "section",
          { className: "header-bottom-bar group" },
          React.createElement(
            "button",
            { className: "header-button", onClick: this.modalToggle },
            "✓"
          ),
          React.createElement(
            "div",
            { className: this.state.checkInForm, onClick: this.closeModal },
            React.createElement(CheckInForm, {
              beer: beer,
              modalToggle: this.modalToggle })
          )
        )
      );
    } else {
      return React.createElement("div", null);
    }
  }
});