var React = require('react');

// Stateless functional components with advanced ES6 destructuring
var WeatherMessage = ({temp, location}) => { // temp and location are props
  return (
    <div>
      <p>It's {temp} in {location}</p>
    </div>
  );
}

module.exports = WeatherMessage;
