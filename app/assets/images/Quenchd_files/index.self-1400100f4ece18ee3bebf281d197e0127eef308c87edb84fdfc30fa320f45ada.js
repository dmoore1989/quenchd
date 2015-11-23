Index = React.createClass({
  displayName: "Index",

  render: function () {
    return React.createElement(
      "div",
      { className: "content" },
      React.createElement(
        "h5",
        { className: "page-title" },
        "Recent Activity"
      ),
      React.createElement(CheckInIndex, { checkInData: QuenchdConstants.FETCH }),
      React.createElement(
        ReactRouter.Link,
        { to: "/beers/new" },
        "Create a New Beer"
      )
    );
  }
});