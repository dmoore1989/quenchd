window.BeerShow = React.createClass({
  getInitialState: function () {
    return ({
      beer: undefined,
      checkInForm: "hidden"
    });
  },

  componentDidMount: function () {
    BeerStore.addChangeHandler(this.setBeer);
    BeerApiUtil.fetchBeer(this.props.params.beerId);
  },

  componentWillUnmount: function () {
    BeerStore.removeChangeHandler(this.setBeer);
  },


  setBeer: function() {
    this.setState({beer: BeerStore.beer()});
  },

  renderCheckInModal: function () {
    var klass = ((this.state.checkInForm === "hidden") ? "check-in" : "hidden");
    this.setState({checkInForm: klass});
  },


  render: function () {
    if (this.state.beer){

      return(
        <div>
          <h1>{this.state.beer.name}</h1>
          <h3>{this.state.beer.style}</h3>
          <colgroup>
            <col>{this.state.beer.abv}</col>
            <col>{this.state.beer.ibu}</col>
          </colgroup>
          <button onClick={this.renderCheckInModal}>
              Check In to This Beer
          </button>
          <div className={this.state.checkInForm} >
            <CheckInForm
              beer={this.state.beer} />
          </div>

          <CheckInIndex
            checkInData={QuenchdConstants.ASSOCIATION}/>
        </div>);
    }
    else {
      return (<div></div>);
    }
  }
});
