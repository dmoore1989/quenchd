window.SearchTypeNav = React.createClass({
  render: function () {
    return (
      <ul onClick={this.changeType}>
        <li>Beer</li>
        <li>Brewery</li>
        <li>Venue</li>
      </ul>
    );
  }

});
