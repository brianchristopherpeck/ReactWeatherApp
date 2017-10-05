var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');

var Weather = React.createClass({
	getInitialState: function () {
		return {
			isLoading: false
		}
	},
	handleSearch: function(location) {
		var that = this;

		this.setState({
			isLoading: true
		});

		OpenWeatherMap.getTemp(location).then( function (temp) {
			that.setState({
				isLoading: false,
				location: location,
				temp: temp
			});
		}, function (errorMessage) {
			that.setState({
				isLoading: false
			});
			alert(errorMessage);
		});
	},
	render: function () {
		var {isLoading, temp, location} = this.state;

		function renderMessage() {
			if (isLoading) {
				return <h3>Fetching Weather... </h3>;
			} else if (temp && location) {
				return <WeatherMessage temp={temp} location={location}/>
			}
		}

		console.log(temp);
		console.log(location);
		return (
			<div>
				<h1 className="text-center">React Weather Application</h1>
				<WeatherForm onSearch={this.handleSearch}/>
				{renderMessage()}
			</div>
		)
	}
});

module.exports = Weather;
