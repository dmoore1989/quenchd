window.SearchPage = React.createClass({
  getInitialState: function () {
    return ({
      query: this.props.params.query,
      results: SearchStore.detailResults(),
      type: "beers"
    });
  },

  componentDidMount: function () {
    SearchStore.addChangeHandler(this.updateResults);
    SearchApiUtil.specificSearch(this.state.query, this.state.type);
  },

  componentWillUnmount: function () {
    SearchStore.removeChangeHandler(this.updateResults);
  },

  updateResults: function () {
    this.setState({results: SearchStore.detailResults()});
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
        <div className="submission">
          <form>
            <input type="text" value={this.state.query} onChange={this.updateQuery} />
            <button onClick={this.submitQuery}>Submit</button>
          </form>
        </div>
        <nav>
          <SearchTypeNav type={this.state.type} changeType={this.changeType} />
        </nav>
        <section>
          <SearchResults results={this.state.results.items} />
        </section>
      </div>
    );
  }


});
