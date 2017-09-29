var React = require('react');

// Presentational component... doesn't maintain a state
var WeatherForm = React.createClass({
    render: function () {
      return(
        <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="city" placeholder="Enter City Name"/>
          <button>Get City</button>
        </form>
        </div>
      );
    }
})

module.exports = WeatherForm;