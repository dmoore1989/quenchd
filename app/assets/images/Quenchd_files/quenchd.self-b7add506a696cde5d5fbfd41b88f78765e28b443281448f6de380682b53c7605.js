$(function () {
  var root = document.getElementById('content');
  var RouteHandler = ReactRouter.RouteHandler;
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;

  var App = React.createClass({
    displayName: "App",

    render: function () {
      return React.createElement(
        "div",
        null,
        this.props.children
      );
    }
  });

  var routes = React.createElement(
    Route,
    { path: "/", component: App },
    React.createElement(IndexRoute, { component: Index }),
    React.createElement(Route, { path: "beers/new", component: BeerForm }),
    React.createElement(Route, {
      path: "beers/:beerId",
      component: Show,
      type: QuenchdConstants.BEER }),
    React.createElement(Route, {
      path: "users/:userId",
      component: Show,
      type: QuenchdConstants.USER }),
    React.createElement(Route, {
      path: "breweries/:breweryId",
      component: Show,
      type: QuenchdConstants.BREWERY }),
    React.createElement(Route, {
      path: "venues/:venueId",
      component: Show,
      type: QuenchdConstants.VENUE })
  );

  React.render(React.createElement(
    Router,
    null,
    routes
  ), root);
});