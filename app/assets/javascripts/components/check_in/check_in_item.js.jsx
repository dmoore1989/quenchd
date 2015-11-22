window.CheckInItem = React.createClass({
  getInitialState: function () {
    var checkInUser= this.props.checkIn.user.id;
    if (checkInUser === current_user_id){
      return ({editable:"visible"});
    } else
      return ({editable:"hidden"});
  },

  componentDidMount: function () {
    CheckInStore.addChangeHandler(this.updateVisibility);
  },

  componentWillUnmount: function () {
    CheckInStore.removeChangeHandler(this.updateVisibility);
  },

  updateVisibility: function () {
    var checkInUser= this.props.checkIn.user.id;
    if (checkInUser === current_user_id){
      this.setState({editable: "visible"});
    } else {
      this.setState({editable: "hidden"});
    }
  },

  deleteCheckIn: function () {
    CheckInApiUtil.deleteCheckIn(this.props.checkIn.id);
  },

  render: function () {
    var user = this.props.checkIn.user.username;
    var linkBeer = "/beers/" + this.props.beer.id;
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
            <div className={this.state.editable}>
              <button onClick={this.deleteCheckIn}>Delete</button>
            </div>
          <CommentsIndex
            checkIn={this.props.checkIn}
            toggleComment={this.state.toggleComment} />
        </section>
        <img
          className="beer-img"
          src="https://placeholdit.imgix.net/~text?txtsize=6&txt=abstract%20user&w=40&h=40" />
      </h6>
    );
  }
});
