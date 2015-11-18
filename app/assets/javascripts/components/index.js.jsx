Index = React.createClass({


  render: function (){
    return (
      <div>
        <h4 className="page-title">Recent Activity</h4>
        <CheckInIndex checkInData={BeerConstants.FETCH} />
        <ReactRouter.Link to="/beers/new">Create a New Beer</ReactRouter.Link>
      </div>
    );
  }
});
