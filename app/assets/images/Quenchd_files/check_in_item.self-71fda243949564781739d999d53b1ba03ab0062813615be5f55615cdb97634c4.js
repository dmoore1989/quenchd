window.CheckInItem = React.createClass({
  displayName: "CheckInItem",

  getInitialState: function () {
    return { toggleCommentForm: false };
  },

  deleteButton: function () {
    if (this.props.checkIn.user.id === currentUserId) {
      return React.createElement(
        "div",
        { className: this.state.editable },
        React.createElement(
          "button",
          { className: "link", onClick: this.deleteCheckIn },
          "Delete Check-In"
        )
      );
    }
  },

  deleteCheckIn: function () {
    CheckInApiUtil.deleteCheckIn(this.props.checkIn.id);
  },

  toggleComment: function () {
    this.setState({ toggleCommentForm: !this.state.toggleCommentForm });
  },

  venueCheckIn: function () {

    if (this.props.checkIn.venue) {
      linkVenue = "/venues/" + this.props.checkIn.venue.id;
      return React.createElement(
        "span",
        null,
        "at ",
        React.createElement(
          ReactRouter.Link,
          { to: linkVenue, className: "link" },
          this.props.checkIn.venue.name
        )
      );
    }
  },

  render: function () {
    var user = this.props.checkIn.user.username;
    var linkBeer = "/beers/" + this.props.beer.id;
    var linkBrewery = "/breweries/" + this.props.checkIn.brewery.id;
    var linkUser = "/users/" + this.props.checkIn.user.id;
    return React.createElement(
      "h6",
      { className: "page-feed group", key: this.props.checkIn.id },
      React.createElement("img", {
        className: "user-img",
        src: "https://placeholdit.imgix.net/~text?txtsize=6&txt=abstract%20user&w=50&h=50" }),
      React.createElement(
        "section",
        { className: "check-in-detail" },
        React.createElement(
          ReactRouter.Link,
          {
            to: linkUser,
            className: "link" },
          user
        ),
        " is drinking a ",
        React.createElement(
          ReactRouter.Link,
          {
            to: linkBeer, className: "link" },
          this.props.beer.name
        ),
        " by ",
        React.createElement(
          ReactRouter.Link,
          {
            to: linkBrewery, className: "link" },
          this.props.checkIn.brewery.name
        ),
        " ",
        this.venueCheckIn(),
        React.createElement(
          "div",
          { className: "check-in-review" },
          React.createElement(
            "p",
            null,
            this.props.checkIn.review
          ),
          React.createElement(
            "p",
            null,
            this.props.checkIn.rating
          )
        ),
        React.createElement(
          "section",
          { className: "interact-bar group" },
          React.createElement(
            "button",
            { className: "comment-button", onClick: this.toggleComment },
            "Comment"
          ),
          React.createElement(LikedCheckIn, { id: this.props.checkIn.id, likes: this.props.checkIn.likes })
        ),
        React.createElement(
          "sub",
          { className: "bottom-check-in-bar group" },
          React.createElement(
            "div",
            null,
            this.props.checkIn.created_at
          ),
          this.deleteButton()
        ),
        React.createElement(CommentsIndex, {
          checkIn: this.props.checkIn,
          toggleCommentForm: this.state.toggleCommentForm })
      ),
      React.createElement("img", {
        className: "beer-img",
        src: "https://placeholdit.imgix.net/~text?txtsize=6&txt=abstract%20user&w=40&h=40" })
    );
  }
});