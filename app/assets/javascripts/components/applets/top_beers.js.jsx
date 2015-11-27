window.TopBeers = React.createClass({
  renderBeers: function () {
    return this.props.beers.map(function(beer) {
      return (<li>{beer.name}</li>);
    });
  },

  render: function () {
    return (<ul>{this.renderBeers()}</ul>);
  }
});
