window.CheckInForm = React.createClass({
  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function () {
    return ({
      rating: 0,
      review: "What did you think?"
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
  },

  render: function () {

    return (
      <form>
        <textarea
          valueLink={this.linkState('review')}>
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
      </form>
    );
  }
});
