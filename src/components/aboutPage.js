var React = require('react');

var About = React.createClass({
	render:function(){
		return (
			<div className="jumbotron">
			<h1>About</h1>
			<h3>Getting started with react.js</h3>
			<p>If you are already familiar with React and you understand the basics, like the concept
			 of virtual DOM and thinking in components, then this React.js tutorial is probably not for you.
			  We will discuss intermediate topics in the upcoming parts of this series.
			  It will be fun, I recommend you to check back later.</p>
			</div>
		)
	}
})

module.exports = About;