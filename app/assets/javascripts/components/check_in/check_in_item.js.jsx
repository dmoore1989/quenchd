window.CheckInItem = React.createClass({
  render: function () {
    var user = this.props.checkIn.user.username;
    var link = "/beers/"+ this.props.beer.id;
    return (
      <h6 className="page-feed" key={this.props.checkIn.id}>
        {user} is drinking a <ReactRouter.Link
            to={link} className="link">
               {this.props.beer.name}
          </ReactRouter.Link>
      </h6>
    );
  }
});
