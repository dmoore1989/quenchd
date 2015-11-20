window.Show = React.createClass({
  getInitialState: function () {
    return ({item: null});
  },

  componentDidMount: function () {
    ShowStore.addChangeHandler(this.setShow);
    this.fetchItem();
  },

  fetchItem: function () {
    switch (this.prop.route.type){
      case QuenchdConstants.USER:
        UserApiUtil.fetchUser(this.props.params.userId);
        break;
    }
  },


  componentWillUnmount: function () {
    ShowStore.removeChangeHandler(this.setShow);
  },


  setShow: function() {
    this.setState({item: ShowStore.item()});
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
