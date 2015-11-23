window.WordCount = React.createClass({
  displayName: "WordCount",

  render: function () {
    return React.createElement(
      "div",
      { className: "word-count" },
      React.createElement(
        "p",
        null,
        140 - this.props.count
      )
    );
  }
});