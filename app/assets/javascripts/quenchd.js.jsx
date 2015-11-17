$(function () {
  var root = document.getElementById('content');
  var RouteHandler = ReactRouter.RouteHandler;
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;

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
      <Route path="beers/:beerId" component={BeerShow} />
    </Route>
  );

  React.render(<Router>{routes}</Router>, root);
});
