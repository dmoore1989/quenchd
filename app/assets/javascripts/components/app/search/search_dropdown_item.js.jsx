window.SearchDropdownItem = React.createClass({
  render: function() {
    return (
      <ul>
        {this.props.samples.map(function(sample){
          var link = "/#/" + this.props.type + "/" + sample.id;
          return (<li className="sample" key={sample.id}>
                <a href={link}>{sample.name}</a>
            </li>);
        }, this)}
      </ul>
    );
  }
});
