window.CheckInForm = React.createClass({
  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function () {
    return ({
      rating: 0,
      review: ""
    });
  },

  createCheckIn: function (e) {
    e.preventDefault();
    checkIn = {
      check_in:{
        beer_id: this.props.beer.id,
        rating: (this.state.rating/2.0),
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
    this.setState({review: review});
  },

  handleRatingChange: function (e) {
    this.setState({rating: e.currentTarget.value});
  },

  modalToggle: function () {
    this.props.modalToggle();
  },

  ratingAmt: function () {
    if (parseInt(this.state.rating) === 0) {
      return (
        <div className="rating-amount">
          <h5>No</h5>
          <h6>Rating</h6>
        </div>
      );
    } else {
      return (
        <div className="rating-amount">
          <h5>{(this.state.rating/2)}</h5>
          <h6>Stars</h6>
        </div>
      );
    }
  },

  render: function () {
    return (
      <div className="check-in">
        <header className="check-in-header group">
          <h6>Check-In</h6>
          <button onClick={this.modalToggle}>
            X
          </button>
        </header>

        <form className="check-in-form">
          <textarea
            onChange={this.handleReviewChange}
            value={this.state.review}
            placeholder="What did you think?">
          </textarea>

          <button className="photo-button">
            📷
          </button>

          <input
            className="rating-range"
            type="range"
            min="0"
            max="10"
            step = "1"
            onChange={this.handleRatingChange}
            value={this.state.rating}/>
          {this.ratingAmt()}

          <input type="input" placeholder="enter your location" className="check-in-location" />
          <button className="check-in-submit" onClick={this.createCheckIn}>Confirm</button>

          <WordCount count={this.state.review.length} />
        </form>
      </div>
    );
  }
});
