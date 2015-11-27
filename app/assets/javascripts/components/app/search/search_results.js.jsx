window.SearchResults = React.createClass({
  render: function () {
    var results = this.props.results || [];
    if (results.length > 0) {
      return(
        <ul className="results">
          {results.map(function (result) {
            var link = "/" + this.props.type + "/" + result.id;
            return (
              <li>
                <ReactRouter.Link to={link}>{result.name}</ReactRouter.Link>
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
