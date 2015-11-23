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
            <ul className="detail-bar group">
              <li></li>
              <li></li>
              <li><div>This will be the ratings</div></li>
              <li>10,250 RATINGS</li>
              <li>CREATED:{venue.create}</li>
            </ul>
          <section className="header-bottom-bar group">

            <button className="header-button" >
              +
            </button>

          </section>
        </div>
      );
    } else {
      return (<div></div>);
    }
  }
})
