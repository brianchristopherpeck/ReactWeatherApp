var React = require('react');

// Stateless functional component
var About = (props) => {
	return (
		<div>
			<h1 className="text-center">About</h1>
			<p>This is a weather application built on React. I built this as an example
				of using a single page application to hit an api and provide a service. </p>
			<p>
				Here is the stack that this app uses:
			</p>
			<ul>
				<li>
					<a href="https://facebook.github.io/react" alt="Facebook react.js Git Repo">React</a>
					- This was the javascript framework used.
				</li>
				<li>
					<a href="http://openweathermap.org" alt="Open Weather Map">Open Weather Map</a>
					- This React application hits the OpenWeatherMap.org api and returns the current temperature by city
				</li>
			</ul>
		</div>
	)
}

module.exports = About;
