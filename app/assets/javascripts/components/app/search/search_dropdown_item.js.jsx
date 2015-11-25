window.SearchDropdownItem = React.createClass({
  render: function() {

    return (
      <ul>
        {this.props.samples.map(function(sample){
          return (<li className="sample" key={sample.id}>
                {sample.name}
            </li>);
        })}
      </ul>
    );
  }
});
