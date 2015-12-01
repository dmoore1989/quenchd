window.Index = React.createClass({
  getInitialState: function () {
    return ({type: "friends"});
  },

  changeType: function (newType) {
    CheckInApiAction.clearCheckIns();
    CheckInApiUtil.fetchCheckins(1, newType);
    this.setState({type: newType});
  },

  render: function (){
    return (
      <div >
        <section className="primary">
          <div className="content group">
            <h5 className="page-title">Recent Activity</h5>
            <IndexType type={this.state.type} changeType={this.changeType} />
            <CheckInIndex type={this.state.type} checkInData={QuenchdConstants.FETCH} />
          </div>
        </section>

        <section className="sidebar">
          <HomeSidebarElements />
        </section>
      </div>
    );
  }
});
