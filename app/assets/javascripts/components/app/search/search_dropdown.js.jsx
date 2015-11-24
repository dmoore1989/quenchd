window.SearchDropdown = React.createClass({

  displayResults: function () {
    var resultKeys = Object.keys(this.props.results);
    return (resultKeys.map(function(item){
      return (
        <div>{item}: {item.count}
          <SearchDropdownItem samples={this.props.results[item].samples} />
        </div>
      );
    }, this));
  },

  render: function () {
    if (this.props.results) {
      return (<div>{this.displayResults()}</div>);
    } else {
      return (<div className="hidden"></div>);
    }
  }
});
