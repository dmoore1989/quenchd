window.SearchResults = React.createClass({
  render: function () {
    return(
      <div>
        {this.props.results.map(function (result) {
          return (<h4>result</h4>);
        })}
      </div>
    );
  }
});
