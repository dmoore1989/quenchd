window.SearchTypeNav = React.createClass({
  changeType: function (e) {
    e.preventDefault();
    this.props.changeType(e.target.type);
  },

  selectedItem: function (elType) {
    if (elType === this.props.type) {
      return "search-nav-selected";
    } else {
      return "search-nav";
    }
  },

  render: function () {
    return (
      <ul className="type group" onClick={this.changeType}>
        <li className={this.selectedItem("beers")} type="beers">Beer</li>
        <li className={this.selectedItem("breweries")} type="breweries">Brewery</li>
        <li className={this.selectedItem("venues")} type="venues">Venue</li>
      </ul>
    );
  }

});
