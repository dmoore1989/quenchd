window.BrewerySidebarElements = React.createClass({
  render: function () {
    return (
      <div>
        <LikeImages likes={this.props.brewery.likes} />
        <TopBeers beers={this.props.brewery.beers} />
      </div>
    );
  }
});
