window.BeerShow = React.createClass({
  getInitialState: function () {
    return ({beer: undefined});
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
          <CheckInIndex checkIns={this.state.beer.check_ins} beer={this.state.beer.name} />
        </div>);
    }
    else {
      return (<div></div>);
    }
  }
});
