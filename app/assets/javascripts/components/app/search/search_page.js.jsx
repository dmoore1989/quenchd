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
    SearchApiUtil.specificSearch(this.state.query, this.state.type);
  },

  updateQuery: function (e) {
    e.preventDefault();
    this.setState({query: e.currentTarget.value});
  },

  changeType: function (type) {
    SearchApiUtil.specificSearch(this.state.query, type);
    this.setState({type: type});
  },

  render: function () {
    return(
      <div className="content">
        <header className="submission">
          <input type="text" value={this.state.query} />
          <button onClick={this.submitQuery} />
        </header>
        <nav>
          <SearchTypeNav type={this.state.type} change={this.changeType} />
        </nav>
        <section>
          <SearchResults results={this.state.results} />
        </section>
      </div>
    );
  }


});
