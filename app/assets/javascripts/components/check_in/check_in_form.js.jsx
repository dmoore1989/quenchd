window.CheckInForm = React.createClass({
  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function () {
    return ({
      rating: 0,
      review: "",
      imageUrl: "",
      imageFile: null
    });
  },

  createCheckIn: function (e) {
    e.preventDefault();

    var beer_id = this.props.beer.id;
    var rating = this.state.rating/2.0;
    var review = this.state.review;
    var image = this.state.imageFile || "";


    var formData = new FormData();
    formData.append('check_in[beer_id]', beer_id);
    formData.append('check_in[rating]', rating);
    formData.append('check_in[review]', review);
    formData.append('check_in[image]', image);

    CheckInApiUtil.createCheckIn(formData);

    this.setState({
      rating: 0,
      review: "",
      imageUrl: "",
      imageFile: null
    });
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

  changeFile: function (e) {
    var reader = new FileReader();
    var file = e.currentTarget.files[0];
    var that = this;

    reader.onloadend = function () {
      that.setState({imageUrl: reader.result, imageFile: file});
    };


    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: "", imageFile: null });
    }
  },

  handleImage: function () {
    if (this.state.imageFile) {
      return (
        <label className="photo-button">
          <img src={this.state.imageUrl} />
          <input type="file" onChange={this.changeFile} />
        </label>
      );
    } else {
      return (
        <label className="photo-button">
          <input type="file" onChange={this.changeFile} />
        </label>
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

        <form className="check-in-form" onSubmit={this.createCheckIn}>
          <textarea
            onChange={this.handleReviewChange}
            value={this.state.review}
            placeholder="What did you think?">
          </textarea>

          {this.handleImage()}


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
          <button className="check-in-submit" >Confirm</button>

          <WordCount count={this.state.review.length} />
        </form>
      </div>
    );
  }
});
