window.SearchDropdown = React.createClass({

  displayResults: function () {
    var resultKeys = Object.keys(this.props.results);
    return (resultKeys.map(function (item) {
        if (this.props.results[item].count === 0) {
          return (<div key={item} className="hidden"></div>);
        } else {
          return (
            <div key={item}>
              <nav className="item-count">{item}:{this.props.results[item].count}</nav>
              <SearchDropdownItem
                type={item}
                samples={this.props.results[item].samples} />
            </div>
          );
        }
      }, this));
    },

  clearSearchBar: function () {
    this.props.clearSearchBar();
  },

  displaySeeMore: function () {
    if (Object.keys(this.props.results).length !== 0) {
      return (
        <a href={"/#/search/"+ this.props.query || ""}
          className="link"
          onClick={this.clearSearchBar}>
            See More
        </a>
      );
    } else {
      return (<div></div>);
    }
  },

  render: function () {
    if (this.props.results && Object.keys(this.props.results).length !== 0) {
      return (
        <div className="dropdown">
          {this.displayResults()}
          {this.displaySeeMore()}
        </div>);
    } else {
      return (<div className="hidden"></div>);
    }
  }
});
