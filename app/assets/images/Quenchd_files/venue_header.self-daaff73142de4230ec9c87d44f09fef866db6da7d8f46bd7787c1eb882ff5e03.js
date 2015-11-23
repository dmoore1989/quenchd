window.VenueHeader = React.createClass({
  displayName: "VenueHeader",

  render: function () {
    if (this.props.item.venue) {
      var venue = this.props.item.venue;
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
              venue.name
            ),
            React.createElement(
              "h4",
              null,
              "venue Name HERE"
            ),
            React.createElement(
              "h6",
              null,
              "Microvenue"
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
            venue.create
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