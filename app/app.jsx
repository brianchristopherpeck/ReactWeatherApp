var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');


// Prop variables. Get passed to component on initialization
ReactDOM.render(
  <Router history={hashHistory}>
  	<Route path="/" component={Main}>
  		
  	</Route>
  </Router>,
  document.getElementById('app')
);
