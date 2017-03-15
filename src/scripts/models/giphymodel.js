import Backbone from 'backbone'


export var TrendingCollection = Backbone.Collection.extend({
	url : 'http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC',
	parse: function(apiResponse){
		return apiResponse.data
	}
})

