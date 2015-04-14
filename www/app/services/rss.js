
var feeds = [];

angular.module('starApp')

/*.factory('FeedLoader', function ($resource) {
	return $resource('http://ajax.googleapis.com/ajax/services/feed/load', {}, {
		fetch: { method: 'JSONP', params: {v: '1.0', callback: 'JSON_CALLBACK'} }
	});
})
.service('FeedList', function ($rootScope, FeedLoader) {
	this.get = function() {
		var feedSources = [
			{title: 'Space', url: 'www.space.com/home/feed/site.xml'}
		];
		if (feeds.length === 0) {
			for (var i=0; i<feedSources.length; i++) {
				FeedLoader.fetch({q: feedSources[i].url, num: 10}, {}, function (data) {
					var feed = data.responseData.feed;
					feeds.push(feed);
					console.log(feeds);
				});
				
			}
		}
		return feeds;
	};
});*/
.factory('feedService',['$http',function($http){
    return {
/*    	parseFeed : function(feed){
    		return $resource('http://ajax.googleapis.com/ajax/services/feed/load', {}, {
			fetch: { method: 'JSONP', params: {v: '1.0', callback: 'JSON_CALLBACK'} }
    		});
    	}
        parseFeed : function(feed){
            return $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' 
            			+ encodeURIComponent(feed));
        }*/
    	parseFeed : function(url){
    		console.log("in parser");
    		// Build the YQL query
    		var qryRSS = 'select * from rss where url='+'"'+feed+'"';
    		// Initiate the YQL query
    		$http("http://query.yahooapis.com/v1/public/yql",
    				{
    			// These are the settings for your API call
    			q: qryRSS,
    			format: "json"
    				},
    				function(data){
    					console.log("in parser");
    					console.log(data);
    					return data.query.results;
    				});
    	}
    }
}]);