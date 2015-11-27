window.BeerSidebarElements = React.createClass({
  render: function () {
    return (
      <div>
        <LikeImages likes={this.props.beer.likes} />
      </div>
    );
  }
});
