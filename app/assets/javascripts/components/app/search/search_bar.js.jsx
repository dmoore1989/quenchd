window.SearchBar = React.createClass({
  getInitialState: function () {
    return ({query: "", results: undefined});
  },

  componentDidMount: function () {
    SearchStore.addChangeHandler(this.updateResults);
  },

  componentWillUnmount: function () {
    SearchStore.removeChangeHandler(this.updateResults);
  },



  updateResults: function () {
    this.setState({results: SearchStore.results()});
  },

  submitQuery: function (e) {
    e.preventDefault();
    var query = e.currentTarget.value;
    if (query.length >= 3) {
      SearchApiUtil.search(query);
      this.setState({query: query});
    } else {
      this.setState({query: query, results: undefined});
    }
  },

  clearSearchBar: function () {
    SearchResultAction.clearResults();
    this.setState({query: "", results: undefined});
  },

  render: function () {
    return (
      <div>
        <input
          type="text"
          className="search-input"
          placeholder="Find a Beer, or Brewery"
          onChange={this.submitQuery}
          value={this.state.query} />
        <SearchDropdown
          results={this.state.results}
          query={this.state.query}
          clearSearchBar={this.clearSearchBar} />
      </div>
    );
  }


});
