window.CheckInItem = React.createClass({


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
          <p>{this.props.checkIn.review}</p>
          <figure>{this.props.checkIn.rating}</figure>
          <CommentsIndex comments={this.props.checkIn.comments} />
      </h6>
    );
  }
});
