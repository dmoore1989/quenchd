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
        rating: this.state.rating,
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

  render: function () {

    return (
      <div className="check-in">
        <header className="check-in-header">
          <h4>Check-In</h4>
        </header>

        <form className="check-in-form">
          <textarea
            onChange={this.handleReviewChange}
            value={this.state.review}
            placeholder="What did you think?">
          </textarea>
          <select valueLink={this.linkState('rating')}>
            <option value="0.0">0</option>
            <option value="0.5">0.5</option>
            <option value="1.0">1</option>
            <option value="1.5">1.5</option>
            <option value="2.0">2</option>
            <option value="2.5">2.5</option>
            <option value="3.0">3</option>
            <option value="3.5">3.5</option>
            <option value="4.0">4</option>
            <option value="4.5">4.5</option>
            <option value="5.0">5</option>
          </select>

          <button onClick={this.createCheckIn}>Confirm</button>
          <WordCount count={this.state.review.length} />
        </form>
      </div>
    );
  }
});
