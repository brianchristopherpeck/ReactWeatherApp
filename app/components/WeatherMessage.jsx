var React = require('react');

// Presentational component... takes props and renders to screen
var WeatherMessage = React.createClass({
  render: function() {
    var {temp, location} = this.props;

    return (
      <div>
        <p>It's {temp} in {location}</p>
      </div>
    );
  }
});

module.exports = WeatherMessage;
