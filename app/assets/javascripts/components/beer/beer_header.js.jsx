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
            <div className="thumbnail"></div>
            <div className="title">
              <h3>{beer.name}</h3>
              <h4>{beer.brewery.name}</h4>
              <h6>{beer.style}</h6>
            </div>
            <div className="check-in-stats"></div>
          </section>
            <ul className="detail-bar group">
              <li>ABV: {beer.abv}</li>
              <li>IBU: {beer.ibu}</li>
              <li><div>This will be the ratings</div></li>
              <li>10,250 RATINGS</li>
              <li>CREATED:{beer.create}</li>
            </ul>
          <section className="header-bottom-bar group">

            <button className="header-button" onClick={this.modalToggle}>
              ✓
            </button>
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
