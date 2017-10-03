var React = require('react');
var AuthorApi = require('../../api/authorApi');

var Authors = React.createClass({
	getinitialState:function(){
		return{
			authors:[]
		};
		
	},

	componentWillMount:function(){
		this.setState({ authors:AuthorApi.getAllAuthors()});
	},
	render: function(){
		var creteAuthorRow = function(author){
			return(
				<tr  key={author.id}>
					<td><a href={"/#authors/"+author.id}>{author.id}</a></td>
					<td>{author.firstName}</td>
				</tr>

			)
		};
		return(
			<div>
				<h1>Authors</h1>
				<table className="table">
					<thead>
						<th>ID</th>
						<th>Name</th>
					</thead>
					<tbody>
						{this.state.authors.map(creteAuthorRow,this)} //state is used for the main page and props is used for sub
					</tbody>
				</table>
			</div>
		);
	}
});

 module.exports= Authors;