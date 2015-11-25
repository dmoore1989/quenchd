window.SearchResults = React.createClass({
  render: function () {
    var results = this.props.results || [];
    return(
      <div>
        {results.map(function (result) {
          return (<h4>{result.name}</h4>);
        })}
      </div>
    );
  }
});
