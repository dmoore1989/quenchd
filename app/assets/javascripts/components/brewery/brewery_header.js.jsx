window.BreweryHeader =  React.createClass({
  render: function () {
    debugger
    return (
      <div className="show-header">
        <section className="header-top-bar group">
          <div className="thumbnail"></div>
          <div className="title">
            <h3>{this.props.brewery.name}</h3>
            <h4>Brewery Name HERE</h4>
            <h6>Microbrewery</h6>
          </div>
          <div className="check-in-stats"></div>
        </section>
          <ul className="detail-bar group">
            <li></li>
            <li></li>
            <li><div>This will be the ratings</div></li>
            <li>10,250 RATINGS</li>
            <li>CREATED:{this.props.brewery.create}</li>
          </ul>
        <section className="header-bottom-bar group">

          <button className="header-button" >
            +
          </button>

        </section>
      </div>
    );
  }
});
