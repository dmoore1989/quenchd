Index = React.createClass({


  render: function (){
    return (
      <div>
        < CheckInIndex />
        <ReactRouter.Link to="/beers/new">Create a New Beer</ReactRouter.Link>
      </div>
    );
  }
});
