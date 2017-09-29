var React = require('react');

// Presentational component... takes props and renders to screen
var WeatherMessage = React.createClass({
  render: function() {
    return (
      <div>
        <p>It's 40 in Philadelphia</p>
      </div>
    );
  }
});

module.exports = WeatherMessage;