import Backbone from 'backbone'


var STORE = Object.assign({},Backbone.Events,{
	data: {
		activeID : '',
		trendingColl : []
	},

	set: function(obj){
		//we want to merge the old key-value pairs with the new key-value pairs
		this.data = Object.assign(this.data,obj)
		this.trigger('dataUpdated')
	}
})
export default STORE