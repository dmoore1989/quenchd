Index = React.createClass({


  render: function (){
    return (
      <div >
        <section className="primary">
          <div className="content">
            <h5 className="page-title">Recent Activity</h5>
            <CheckInIndex checkInData={QuenchdConstants.FETCH} />
            <ReactRouter.Link to="/beers/new">Create a New Beer</ReactRouter.Link>
            <ReactRouter.Link to="/breweries/new">Create a New Brewery</ReactRouter.Link>
          </div>
        </section>

        <section className="sidebar">
          <HomeSidebarElements />

        </section>
      </div>
    );
  }
});
