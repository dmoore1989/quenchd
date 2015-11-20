window.CheckInItem = React.createClass({
  getInitialState: function () {
    debugger
    var checkInUser= this.props.checkIn.user.id;
    if (checkInUser === current_user_id){
      return ({editable:"visible"});
    } else
      return ({editable:"hidden"});
  },

  deleteCheckIn: function () {
    CheckInApiUtil.deleteCheckIn(this.props.checkIn.id);
  },

  render: function () {
    var user = this.props.checkIn.user.username;
    var linkBeer = "/beers/" + this.props.beer.id;
    var linkUser = "/users/" + this.props.checkIn.user.id;
    return (
      <h6 className="page-feed" key={this.props.checkIn.id}>
        <ReactRouter.Link
          to={linkUser}
          className="link">
          {user}
          </ReactRouter.Link> is drinking a <ReactRouter.Link
            to={linkBeer} className="link">
               {this.props.beer.name}
          </ReactRouter.Link>
          <p>{this.props.checkIn.rating}</p>
          <p>{this.props.checkIn.review}</p>
          <div className={this.state.editable}>
            <button onClick={this.deleteCheckIn}>Delete</button>
          </div>
          <CommentsIndex
            checkIn={this.props.checkIn} />
      </h6>
    );
  }
});
