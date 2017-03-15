import React from 'react'

var Banner = React.createClass({
	render: function (){
		return (
			<div className='banner'>
				<h1>Get Giphy With It</h1>
				<input type='text' placeholder='search' id='searchBar' />
			</div>
		)
	}
})

export default Banner