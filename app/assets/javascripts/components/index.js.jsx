Index = React.createClass({


  render: function (){
    return (
      <div >
        <section className="primary">
          <div className="content">
            <h5 className="page-title">Recent Activity</h5>
            <CheckInIndex checkInData={QuenchdConstants.FETCH} />
            
          </div>
        </section>

        <section className="sidebar">
          <HomeSidebarElements />
        </section>
      </div>
    );
  }
});
