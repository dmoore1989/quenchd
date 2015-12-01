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
          <div className="content">
            <div className="page-title group">
              <h5>Recent Activity</h5>
              <IndexType type={this.state.type} changeType={this.changeType} />
            </div>
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
