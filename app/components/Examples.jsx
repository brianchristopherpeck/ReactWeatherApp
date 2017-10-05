var React = require('react');
var {Link} = require('react-router');

// Stateless functional component
var Examples = (props) => {
	return (
		<div>
			<h1 className="text-center">Examples</h1>
			<p>Here are a few example locations to try out:</p>
			<ol>
				<li>
					<Link to="/?location=philadelphia">Philadelphia, PA</Link>
				</li>
				<li>
					<Link to="/?location=syracuse">Syracuse, NY</Link>
				</li>
			</ol>
		</div>
	)
}

module.exports =Examples;
