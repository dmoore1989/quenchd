window.BeerHeader = React.createClass({
  getInitialState: function () {
    return ({
      checkInForm: "hidden"
    });
  },

  modalToggle: function () {
    var klass = ((this.state.checkInForm === "hidden") ? "modal" : "hidden");
    this.setState({checkInForm: klass});
  },

  render: function () {
    console.log(this.props.beer);
    return (
      <div className="show-header">
        <section className="header-top-bar group">
          <div className="thumbnail"></div>
          <div className="title">
            <h3>{this.props.beer.name}</h3>
            <h4>Brewery Name HERE</h4>
            <h6>{this.props.beer.style}</h6>
          </div>
          <div className="check-in-stats"></div>
        </section>
          <ul className="detail-bar group">
            <li>ABV: {this.props.beer.abv}</li>
            <li>IBU: {this.props.beer.ibu}</li>
            <li><div>This will be the ratings</div></li>
            <li>10,250 RATINGS</li>
            <li>CREATED:{this.props.beer.create}</li>
          </ul>
        <section className="header-bottom-bar group">

          <button className="header-button" onClick={this.modalToggle}>
            ✓
          </button>
          <div className={this.state.checkInForm} >
            <CheckInForm
              beer={this.props.beer}
              modalToggle={this.modalToggle} />
            </div>
        </section>
      </div>
    );
  }
});
