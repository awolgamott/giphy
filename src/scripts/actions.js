import {TrendingCollection} from './models/giphymodel'
import STORE from './store'

var ACTIONS = {
	fetchTrending: function (){
		var trendingInstance = new TrendingCollection
		var promise = trendingInstance.fetch()
		promise.then(function(){
			STORE.set({
				trendingColl: trendingInstance
			})
		})
	},
}

export default ACTIONS