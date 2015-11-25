window.BeerHeader = React.createClass({
  getInitialState: function () {
    return ({
      checkInForm: "hidden"
    });
  },

  closeModal: function (e) {
    if (e.target.className === "modal") {
      this.modalToggle();
    }
  },

  modalToggle: function () {
    var klass = ((this.state.checkInForm === "hidden") ? "modal" : "hidden");
    this.setState({checkInForm: klass});
  },

  render: function () {
    if (this.props.item.beer) {
      var beer = this.props.item.beer;
      return (
        <div className="show-header">
          <section className="header-top-bar group">
            <div className="thumbnail"><img src={beer.beerImage} /></div>
            <div className="title">
              <h3>{beer.name}</h3>
              <h4>{beer.brewery.name}</h4>
              <h6>{beer.style}</h6>
            </div>
            <ul className="check-in-stats group">
              <li><p>total</p><h5>{beer.check_ins}</h5></li>
              <li><p>unique</p><h5>{beer.uniq_check_ins}</h5></li>
              <li><p>monthly</p><h5>{beer.monthly}</h5></li>
              <li><p>you</p><h5><a
                className="link"
                href="#">{beer.current_user_check_in}</a></h5></li>
            </ul>
          </section>
            <ul className="detail-bar group">
              <li>ABV: {beer.abv}</li>
              <li>IBU: {beer.ibu}</li>
              <li>Average Rating: {beer.avg}</li>
              <li>{beer.rating_count} RATINGS</li>
              <li>CREATED:{beer.create}</li>
            </ul>
          <section className="header-bottom-bar group">

            <button className="header-button" onClick={this.modalToggle}>
              ✓
            </button>
            <LikedShowItem id={beer.id} type={"Beer"} />
            <div className={this.state.checkInForm} onClick={this.closeModal}>
              <CheckInForm
                beer={beer}
                modalToggle={this.modalToggle} />
              </div>
          </section>
        </div>
      );
    } else {
      return( <div></div>);
    }
  }
});
