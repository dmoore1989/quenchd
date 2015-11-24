window.CheckInRating = React.createClass({
  render: function () {
    if (this.props.rating === 0){
      return (<p></p>);
    } else {
      return (<p>{this.props.rating} Stars</p>);
    }
  }
});
