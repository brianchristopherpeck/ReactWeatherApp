var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');
var ErrorModal = require('ErrorModal');
var queryString = require('query-string');

var Weather = React.createClass({
	getInitialState: function () {
		return {
			isLoading: false,
			errorMessage: undefined
		}
	},
	handleSearch: function(location) {
		var that = this;

		this.setState({
			isLoading: true,
			errorMessage: undefined,
			location: undefined,
			temp: undefined
		});

		OpenWeatherMap.getTemp(location).then( function (temp) {
			that.setState({
				isLoading: false,
				location: location,
				temp: temp
			});
		}, function (e) {
			that.setState({
				isLoading: false,
				errorMessage: e.message
			});
		});
	},
	componentDidMount: function () {
		// var locationObject = queryString.parse(this.props.location.search);
    var location = this.props.location.query.location;

		if (location && location.length > 0) {
			this.handleSearch(location);
			window.location.hash = '#/';
		}
	},
	componentWillReceiveProps: function (newProps) {
		// var locationObject = queryString.parse(this.props.location.search);
    var location = newProps.location.query.location;

		if (location && location.length > 0) {
			this.handleSearch(location);
			window.location.hash = '#/';
		}
	},
	render: function () {
		var {isLoading, temp, location, errorMessage} = this.state;

		function renderMessage() {
			if (isLoading) {
				return <h3 className="text-center">Fetching Weather... </h3>;
			} else if (temp && location) {
				return <WeatherMessage temp={temp} location={location}/>
			}
		}

		function renderError() {
			if(typeof errorMessage === 'string') {
				return(
					<ErrorModal message={errorMessage}/>
				);
			}
		}

		return (
			<div>
				<h1 className="text-center page-title">Get Weather</h1>
				<WeatherForm onSearch={this.handleSearch}/>
				{renderMessage()}
				{renderError()}
			</div>
		)
	}
});

module.exports = Weather;
