window.CheckInIndex = React.createClass({
  render: function () {
    return (
      <div>
        {this.props.checkIns.map(function(checkIn){
          return <CheckInItem
                    checkIn={checkIn}
                    key={checkIn.id}
                    beer={this.props.beer}/>;
        }, this)}
      </div>
    );
  }
});
