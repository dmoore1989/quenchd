window.CheckInItem = React.createClass({
  getInitialState: function () {
    return ({toggleCommentForm: false});
  },

  deleteButton: function () {
    if (this.props.checkIn.user.id === currentUserId) {
      return (
        <div className={this.state.editable}>
          <button className="link" onClick={this.deleteCheckIn}>Delete Check-In</button>
        </div>
      );
    }
  },

  deleteCheckIn: function () {
    CheckInApiUtil.deleteCheckIn(this.props.checkIn.id);
  },

  toggleComment: function () {
    this.setState({toggleCommentForm: !this.state.toggleCommentForm});
  },

  render: function () {
    var user = this.props.checkIn.user.username;
    var linkBeer = "/beers/" + this.props.beer.id;
    var linkBrewery = "/breweries/" + this.props.checkIn.brewery.id;
    var linkUser = "/users/" + this.props.checkIn.user.id;
    return (
      <h6 className="page-feed group" key={this.props.checkIn.id}>
        <img
          className="user-img"
          src="https://placeholdit.imgix.net/~text?txtsize=6&txt=abstract%20user&w=50&h=50" />
        <section className="check-in-detail">
          <ReactRouter.Link
            to={linkUser}
            className="link">
            {user}
          </ReactRouter.Link> is drinking a <ReactRouter.Link
            to={linkBeer} className="link">
              {this.props.beer.name}
            </ReactRouter.Link> by <ReactRouter.Link
              to={linkBrewery} className="link">
              {this.props.checkIn.brewery.name}
            </ReactRouter.Link>

          <div className="check-in-review">
            <p>{this.props.checkIn.review}</p>
            <p>{this.props.checkIn.rating}</p>
          </div>
          <section className="interact-bar">
            <button className="comment-button" onClick={this.toggleComment}>
              Comment
            </button>
          </section>
          <sub className="bottom-check-in-bar group">
            <div>{this.props.checkIn.created_at}</div>
            {this.deleteButton()}
          </sub>
          <CommentsIndex
            checkIn={this.props.checkIn}
            toggleCommentForm={this.state.toggleCommentForm} />
        </section>
        <img
          className="beer-img"
          src="https://placeholdit.imgix.net/~text?txtsize=6&txt=abstract%20user&w=40&h=40" />
      </h6>
    );
  }
});
