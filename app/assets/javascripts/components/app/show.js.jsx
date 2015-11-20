window.Show = React.createClass({
  getInitialState: function () {
    return ({item: null, type: this.props.routes[1].type});
  },

  componentDidMount: function () {
    ShowStore.addChangeHandler(this.setShow);
    this.fetchItem();
  },


  componentWillUnmount: function () {
    ShowStore.removeChangeHandler(this.setShow);
  },


  setShow: function() {
    this.setState({item: ShowStore.item(), type: ShowStore.type()});
  },

  render: function () {
    if (this.state.item){
      return(
        <div>
          <h1>{this.state.item.username}</h1>
          <colgroup>
            <col>{this.state.item.location}</col>
            <col>{this.state.item.website}</col>
          </colgroup>
          <CheckInIndex
            checkInData={QuenchdConstants.ASSOCIATION}/>
        </div>);
    }
    else {
      return (<div></div>);
    }
  }
});
