$=jquery = require('jquery');
var React = require('react');
var ReactDom = require('react-dom');
var Home = require('./components/homePage');
var About = require('./components/aboutPage');
var Authors = require('./components/authors/authorPage');
var Contact =require('./components/contactPage');
var Header = require('./components/common/Header');

var App = React.createClass({
	render:function(){
		var Child;

		switch(this.props.route){
			case 'about':Child =About; break;
			case 'authors':Child=Authors; break;
			case 'contact':Child=Contact; break;
			default: Child = Home;
		}
		return (
			<div>
				<Header/>
				<Child/>
			</div>
		)
	}
});
function render(){
	var route = window.location.hash.substr(1);
	ReactDom.render(<App route={route} />,document.getElementById('app'));
}
window.addEventListener('hashchange',render);
render();
