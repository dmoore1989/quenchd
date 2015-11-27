window.BeerSidebarElements = React.createClass({
  render: function () {
    if (this.props.beer) {
      return (
        <div>
          <LikeImages likes={this.props.beer.likes} />
        </div>
      );
    } else {
      return (<div></div>);
    }
  }
});
