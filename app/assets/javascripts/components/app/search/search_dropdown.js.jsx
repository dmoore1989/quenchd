window.SearchDropdown = React.createClass({

  displayResults: function () {
    var resultKeys = Object.keys(this.props.results);
    return (resultKeys.map(function (item) {
        if (this.props.results[item].count === 0) {
          return (<div className="hidden"></div>);
        } else {
          return (
            <div>
              <nav className="item-count">{item}:{this.props.results[item].count}</nav>
              <SearchDropdownItem
                key={item}
                type={item}
                samples={this.props.results[item].samples} />
            </div>
          );
        }
      }, this));
    },

  displaySeeMore: function () {
    if (Object.keys(this.props.results).length !== 0) {
      return (
        <a href={"/#/search/"+ this.props.query || ""} className="link">
          See More
        </a>
      );
    } else {
      return (<div></div>);
    }
  },

  render: function () {
    if (this.props.results) {
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
