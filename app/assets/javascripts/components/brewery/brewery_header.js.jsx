window.BreweryHeader =  React.createClass({
  render: function () {
    if (this.props.item.brewery) {
      var brewery = this.props.item.brewery;
      return (
        <div className="show-header">
          <section className="header-top-bar group">
            <div className="thumbnail"><img src={brewery.breweryImage} /></div>
            <div className="title">
              <h3>{brewery.name}</h3>
              <h4>{brewery.address}</h4>
            </div>
            <ul className="check-in-stats group">
              <li><p>total</p><h5>{brewery.check_ins}</h5></li>
              <li><p>unique</p><h5>{brewery.uniq_check_ins}</h5></li>
              <li><p>monthly</p><h5>{brewery.monthly}</h5></li>
              <li><p>you</p><h5><a
                className="link"
                href="#">{brewery.current_user_check_in}</a></h5></li>
            </ul>
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
