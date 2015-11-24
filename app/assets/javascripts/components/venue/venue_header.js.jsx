window.VenueHeader = React.createClass({
  render: function () {
    if (this.props.item.venue) {
      var venue = this.props.item.venue;
      return (
        <div className="show-header">
          <section className="header-top-bar group">
            <div className="thumbnail"></div>
            <div className="title">
              <h3>{venue.name}</h3>
              <h4>venue Name HERE</h4>
              <h6>Microvenue</h6>
            </div>
            <div className="check-in-stats"></div>
          </section>
            
          <section className="header-bottom-bar group">

          <LikedShowItem id={venue.id} type={"Venue"} />

          </section>
        </div>
      );
    } else {
      return (<div></div>);
    }
  }
});
