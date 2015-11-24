window.BreweryHeader =  React.createClass({
  render: function () {
    if (this.props.item.brewery) {
      var brewery = this.props.item.brewery;
      return (
        <div className="show-header">
          <section className="header-top-bar group">
            <div className="thumbnail"></div>
            <div className="title">
              <h3>{brewery.name}</h3>
              <h4>{brewery.address}</h4>
              <h6>Microbrewery</h6>
            </div>
            <div className="check-in-stats"></div>
          </section>
            <ul className="detail-bar group">
              <li></li>
              <li></li>
              <li>Average Rating: {brewery.avg}</li>
              <li>{brewery.rating_count} RATINGS</li>
              <li>CREATED:{brewery.create}</li>
            </ul>
          <section className="header-bottom-bar group">

          <LikedShowItem id={brewery.id} type={"Brewery"} />

          </section>
        </div>
      );
    } else {
      return (<div></div>);
    }
  }
});
