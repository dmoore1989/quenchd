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
            <ul className="check-in-stats">
              <li><p>total</p><h5>{beer.check_ins}</h5></li>
              <li><p>unique</p><h5>{beer.uniq_check_ins}</h5></li>
              <li><p>monthly</p><h5>{beer.monthly}</h5></li>
              <li><p>you</p><h5><a
                className="link"
                href="#">{beer.current_user_check_in}</a></h5></li>
            </ul>
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
