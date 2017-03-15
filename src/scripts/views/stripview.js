import React from 'react'
import Banner from './components/banner'
import {TrendingCollection} from '../models/giphymodel'
import STORE from '../store'
import Backbone from 'backbone'
import ACTIONS from '../actions'

var StripView = React.createClass({
	componentWillMount: function(){
		//we are fetching the trending gifs collection and then set the state
		ACTIONS.fetchTrending()
		//subscribe
		STORE.on('dataUpdated', () => {
			this.setState(STORE.data)
		})
	},
	//the state of this component will always be an exact copy of whatever is in STORE.data
	getInitialState: function(){
		return STORE.data
	},

	render: function(){
		console.log(this.state)
		return (
			<div className='strip-view'>
				<Banner />
				<Strip
				gifCollection = {this.state.trendingColl}/>
			</div>
		)
	}

})

var Strip = React.createClass({
	_makeGif: function(singleModel) {
		console.log('this is a singleGif', singleModel)
		//the input is an array element and the output is going to be a tranformed version of that element
		return <GifComponent 
				gifData = {singleModel}/> 

	},
	render: function(){
		console.log('console.log props on string', this.props)
		return(
			<div className='strip'>
				{this.props.gifCollection.map(this._makeGif)}
			</div>
		)
	}
})

var GifComponent = React.createClass({
	render: function(){
		return(
			<div className='singleGif'>
				<img src={this.props.gifData.get('images').original.url}/>
			</div>

		)
	}
})

export default StripView