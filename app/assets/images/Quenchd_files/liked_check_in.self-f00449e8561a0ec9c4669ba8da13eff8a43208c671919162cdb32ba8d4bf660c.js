window.LikedCheckIn = React.createClass({
  displayName: "LikedCheckIn",

  toggleLike: function (e) {
    e.preventDefault();

    like = {
      like: {
        likeable_id: this.props.id,
        likeable_type: "CheckIn"
      }
    };
    LikeApiUtil.createLike(like);
  },

  render: function () {
    return React.createElement(
      "span",
      null,
      React.createElement(
        "button",
        { className: "comment-button", onClick: this.toggleLike },
        "Cheers!"
      ),
      React.createElement(
        "div",
        { className: "like-counter" },
        React.createElement(
          "h4",
          null,
          this.props.likes.length,
          " 🍺"
        )
      )
    );
  }
});