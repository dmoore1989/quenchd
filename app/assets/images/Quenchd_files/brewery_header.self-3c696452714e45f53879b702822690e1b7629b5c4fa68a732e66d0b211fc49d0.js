window.BreweryHeader = React.createClass({
  displayName: "BreweryHeader",

  render: function () {
    if (this.props.item.brewery) {
      var brewery = this.props.item.brewery;
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
              brewery.name
            ),
            React.createElement(
              "h4",
              null,
              brewery.address
            ),
            React.createElement(
              "h6",
              null,
              "Microbrewery"
            )
          ),
          React.createElement("div", { className: "check-in-stats" })
        ),
        React.createElement(
          "ul",
          { className: "detail-bar group" },
          React.createElement("li", null),
          React.createElement("li", null),
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
            brewery.create
          )
        ),
        React.createElement(
          "section",
          { className: "header-bottom-bar group" },
          React.createElement(
            "button",
            { className: "header-button" },
            "+"
          )
        )
      );
    } else {
      return React.createElement("div", null);
    }
  }
});