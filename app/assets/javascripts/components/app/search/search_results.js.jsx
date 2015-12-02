window.SearchResults = React.createClass({
  nameOfResult: function (result) {
    if (this.props.type === 'users') {
      return result.username;
    } else {
      return result.name;
    }

  },

  render: function () {
    var results = this.props.results || [];
    if (results.length > 0) {
      return(
        <ul className="results">
          {results.map(function (result) {
            var link = "/" + this.props.type + "/" + result.id;
            return (
              <li>
                <ReactRouter.Link to={link}>{this.nameOfResult(result)}</ReactRouter.Link>
              </li>
            );
          }, this)}
        </ul>
      );
    } else {
      return (<div className="no-results">No Results</div>);
    }
  }
});
