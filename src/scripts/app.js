import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'

import StripView from './views/stripview'

var app = function() {
  var GifRouter = Backbone.Router.extend({
  	routes: {
  		"gifs/strip" : "handleStrip",
  		"gifs/detail/:id" : "handleDetail"
  	},
  	handleStrip : function() {
  		ReactDOM.render(<StripView />, document.querySelector('.container'))
  	},
  	handleDetail : function() {
  		ReactDOM.render(<DetailView />, document.querySelector('.container'))
  	}

  })
  new GifRouter ()
  Backbone.history.start()
}

// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE. 
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..