var React = require('react');

var Home = React.createClass({
	render: function(){
		return (
			<div className="jumbotron">
				<h1>Welcome home  </h1>
				<h3>Basics things to learn in react </h3>
				<p>React is not a framework; there are concepts, libraries and principles that turn it into a fast, 
				compact and beautiful way to program your app on the client and server side as well.</p>
				<ol>
				<li>ES6 React</li>
				<li>virtual DOM</li>
			    <li>Component-driven development</li>
				<li>Immutability</li>
				<li>Top-down rendering</li>
				<li>Rendering path and optimization</li>
				<li>Common tools libs for bundling, ES6, request making, debugging, routing, etc.</li>
				<li>Isomorphic React</li>
				</ol>

			</div>
		)
	}
});

module.exports = Home;