Index = React.createClass({


  render: function (){
    return (
      <div className="content">
        <h5 className="page-title">Recent Activity- Click into a Beer to Check In</h5>
        <CheckInIndex checkInData={QuenchdConstants.FETCH} />
        <ReactRouter.Link to="/beers/new">Create a New Beer</ReactRouter.Link>
      </div>
    );
  }
});
