window.SearchDropdown = React.createClass({

  displayResults: function () {
    var resultKeys = Object.keys(this.props.results);
    return (resultKeys.map(function(item){
      return (
        <div>
          <nav className="item-count">{item}:{this.props.results[item].count}</nav>
            <SearchDropdownItem key={item} samples={this.props.results[item].samples} />
        </div>
      );
    }, this));
  },

  render: function () {
    if (this.props.results) {
      return (
        <div className="dropdown">{this.displayResults()}
          <a className="link" href="#/search">See More</a>
        </div>);
    } else {
      return (<div className="hidden"></div>);
    }
  }
});
