window.SearchDropdownItem = React.createClass({
  render: function() {

    return (
      <ul>
        {this.props.samples.map(function(sample){
          return (<li key={sample.id}>
                {sample.name}
            </li>);
        })}
      </ul>
    );
  }
});
