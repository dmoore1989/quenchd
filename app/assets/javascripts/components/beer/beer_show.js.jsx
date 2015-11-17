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
      return(<div>{this.state.beer}</div>);
    }
    else {
      return (<div>hey</div>);
    }
  }
});
