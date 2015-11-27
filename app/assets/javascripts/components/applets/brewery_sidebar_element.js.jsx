window.BrewerySidebarElements = React.createClass({
  render: function () {
    if (this.props.brewery) {
      return (
        <div>
          <LikeImages likes={this.props.brewery.likes} />
          <TopBeers beers={this.props.brewery.beers} />
        </div>
      );
    } else {
      return (<div></div>);
    }
  }
});
