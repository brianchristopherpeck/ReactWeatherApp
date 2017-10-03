var React = require('react');

// Stateless functional component
var About = (props) => {
	return (
		<div>
			<h3>About</h3>
			<p>This is a weather app that uses opnweathermap.org to get the current weather in a specific location</p>
		</div>
	)
}

module.exports = About;
