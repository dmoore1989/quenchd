window.CheckInForm = React.createClass({
  displayName: "CheckInForm",

  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function () {
    return {
      rating: 0,
      review: ""
    };
  },

  createCheckIn: function (e) {
    e.preventDefault();
    checkIn = {
      check_in: {
        beer_id: this.props.beer.id,
        rating: this.state.rating / 2.0,
        review: this.state.review
      }
    };
    this.setState({
      rating: 0,
      review: ""
    });
    CheckInApiUtil.createCheckIn(checkIn);
    this.props.modalToggle();
  },

  handleReviewChange: function (e) {
    var review = e.currentTarget.value;
    if (review.length > 140) {
      review = review.slice(0, 140);
    }
    this.setState({ review: review });
  },

  handleRatingChange: function (e) {
    this.setState({ rating: e.currentTarget.value });
  },

  modalToggle: function () {
    this.props.modalToggle();
  },

  ratingAmt: function () {
    if (parseInt(this.state.rating) === 0) {
      return React.createElement(
        "div",
        { className: "rating-amount" },
        React.createElement(
          "h5",
          null,
          "No"
        ),
        React.createElement(
          "h6",
          null,
          "Rating"
        )
      );
    } else {
      return React.createElement(
        "div",
        { className: "rating-amount" },
        React.createElement(
          "h5",
          null,
          this.state.rating / 2
        ),
        React.createElement(
          "h6",
          null,
          "Stars"
        )
      );
    }
  },

  render: function () {
    console.log(this.state.rating);
    return React.createElement(
      "div",
      { className: "check-in" },
      React.createElement(
        "header",
        { className: "check-in-header group" },
        React.createElement(
          "h6",
          null,
          "Check-In"
        ),
        React.createElement(
          "button",
          { onClick: this.modalToggle },
          "X"
        )
      ),
      React.createElement(
        "form",
        { className: "check-in-form" },
        React.createElement("textarea", {
          onChange: this.handleReviewChange,
          value: this.state.review,
          placeholder: "What did you think?" }),
        React.createElement(
          "button",
          { className: "photo-button" },
          "📷"
        ),
        React.createElement("input", {
          className: "rating-range",
          type: "range",
          min: "0",
          max: "10",
          step: "1",
          onChange: this.handleRatingChange,
          value: this.state.rating }),
        this.ratingAmt(),
        React.createElement("input", { type: "input", placeholder: "enter your location", className: "check-in-location" }),
        React.createElement(
          "button",
          { className: "check-in-submit", onClick: this.createCheckIn },
          "Confirm"
        ),
        React.createElement(WordCount, { count: this.state.review.length })
      )
    );
  }
});