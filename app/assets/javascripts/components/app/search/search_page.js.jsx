window.SearchPage = React.createClass({
  getInitialState: function () {
    return ({query: "", results: SearchStore.results(), type: QuenchdConstants.BEER});
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
    SearchApiUtil.paginatedSearch(this.state.query);
  },

  updateQuery: function (e) {
    e.preventDefault();
    this.setState({query: e.currentTarget.value});
  },

  render: function () {
    return(
      <div className="content">
        <header className="submission">
          <input type="text" value={this.state.query} />
          <button onClick={this.submitQuery} />
        </header>
        <nav>
          <SearchTypeNav type=this.state.type />
        </nav>
        <section>
          <SearchResults Result
        </section>
      </div>
    );
  }


});
