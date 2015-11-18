window.CheckInItem = React.createClass({
  render: function () {
    var user = this.props.checkIn.user.username;
    var link = "/beers/"+ this.props.beer.id;
    return (
      <div key={this.props.checkIn.id}>
        <h4>{user} is drinking a <ReactRouter.Link
            to={link}>
               {this.props.beer.name}
          </ReactRouter.Link>
        </h4>
      </div>
    );
  }
});
