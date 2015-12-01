window.UserSearch = React.createClass({
  getInitialState: function () {
    return ({
      query: "",
      results: UsersStore.all()
    });
  },

  componentDidMount: function () {
    UsersStore.addChangeHandler(this.updateResults);
    UserApiUtil.search(this.state.query);
  },

  componentWillUnmount: function () {
    UserStore.removeChangeHandler(this.updateResults);
  },

  updateResults: function () {
    this.setState({results: UsersStore.all()});
  },

  submitQuery: function (e) {
    e.preventDefault();
    UserApiUtil.search(this.state.query);
  },

  updateQuery: function (e) {
    e.preventDefault();
    this.setState({query: e.currentTarget.value});
  },

  render: function () {
    return(
      <div>
        <section className="primary">
          <div className="content">
            <div className="submission group">
              <form>
                <input type="text" value={this.state.query} onChange={this.updateQuery} />
                <button onClick={this.submitQuery}>Submit</button>
              </form>
            </div>

            <SearchResults results={this.state.results.items} />
          </div>
        </section>


      </div>
    );
  }

});
