window.UserHeader = React.createClass({
  displayName: "UserHeader",

  render: function () {
    if (this.props.item.user) {
      var user = this.props.item.user;
      return React.createElement(
        "div",
        { className: "user-profile-header group" },
        React.createElement("img", { src: "https://placeholdit.imgix.net/~text?txtsize=33&txt=abstract%20user&w=125&h=125" }),
        React.createElement(
          "section",
          { className: "user-profile-info" },
          React.createElement(
            "h2",
            null,
            user.username
          ),
          React.createElement(
            "ul",
            null,
            React.createElement(
              "li",
              null,
              user.location
            ),
            React.createElement(
              "li",
              null,
              user.website
            )
          )
        ),
        React.createElement(
          "footer",
          { className: "user-profile-footer group" },
          React.createElement(
            "ul",
            null,
            React.createElement(
              "li",
              null,
              React.createElement(
                "h4",
                null,
                "9,000"
              ),
              React.createElement(
                "h6",
                null,
                "total"
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "h4",
                null,
                "6,517"
              ),
              React.createElement(
                "h6",
                null,
                "Unique"
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "h4",
                null,
                "0"
              ),
              React.createElement(
                "h6",
                null,
                "Badges"
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "h4",
                null,
                "150"
              ),
              React.createElement(
                "h6",
                null,
                "friends"
              )
            )
          )
        )
      );
    } else {
      return React.createElement("div", null);
    }
  }
});