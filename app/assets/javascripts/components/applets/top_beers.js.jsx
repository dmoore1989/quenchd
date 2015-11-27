window.TopBeers = React.createClass({
  renderBeers: function () {
    return this.props.beers.map(function(beer) {
      return (
        <ReactRouter.Link to={"/beers/" + beer.beer.id}>
          <li className="beer-list-item group">
            <img src={beer.image} />
            <h6>{beer.beer.name}</h6>
          </li>
        </ReactRouter.Link>
      );
    });
  },

  render: function () {
    return (
      <div className="sidebar-applet">
        <div className="sidebar-applet-header">
          <h4>Beers</h4>
        </div>
        <ul className="beer-list">{this.renderBeers()}</ul>
      </div>
    );
  }
});
