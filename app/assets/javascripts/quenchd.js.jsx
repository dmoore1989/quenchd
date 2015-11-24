$(function () {
  var root = document.getElementById('content');
  var RouteHandler = ReactRouter.RouteHandler;
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;
  var search = document.getElementById('search-bar')

  var App = React.createClass({
    render: function () {
      return (
        <div>
          {this.props.children}
        </div>
      );
    }
  });

  var routes =  (
    <Route path="/" component={App}>
      <IndexRoute component={Index} />
      <Route path="beers/new" component={BeerForm} />
      <Route
        path="beers/:beerId"
        component={Show}
        type={QuenchdConstants.BEER} />
      <Route
        path="users/:userId"
        component={Show}
        type={QuenchdConstants.USER} />
      <Route
        path="breweries/:breweryId"
        component={Show}
        type={QuenchdConstants.BREWERY} />
      <Route
        path="venues/:venueId"
        component={Show}
        type={QuenchdConstants.VENUE} />
    </Route>
  );

  React.render(<Router>{routes}</Router>, root);
  React.render(<SearchBar />, search);
});
