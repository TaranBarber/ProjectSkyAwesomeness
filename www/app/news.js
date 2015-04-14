/*angular.module('starApp', [])

.controller('NewsCtrl', function($scope){

	$scope.getRSSFeed = function(feed){
		// Build the YQL query
		var qryRSS = 'select * from rss where url='+'"'+feed+'"';
		// Initiate the YQL query
		$.getJSON("http://query.yahooapis.com/v1/public/yql",
				{
			// These are the settings for your API call
			q: qryRSS,
			format: "json"
				},

				// Take the data you got from the YQL server and output it to the screen.  The variable "data" holds the JSON you got back from the YQL server.
				function(data) {
					// Just bother with the last 10 entries within the JSON feed
					for (i=0; i<10; i++)
					{
						// Output the title attribute
						$('#accordion').append('<h3>'+data.query.results.item[i].title+'</h3>');
						// Output the description, using the description attribute. 
						$('#accordion').append('<div>'+data.query.results.item[i].description+'</div>');
					}
					// Trigger the accordian
					$(function() {
						$( "#accordion" ).accordion();
					});
				});
	};

	$scope.getRSSFeed('www.space.com/home/feed/site.xml');
});*/

angular.module('starApp')

.controller('NewsCtrl', function($scope) {
	
/*    $scope.getRSSFeed = function(src){      
    	console.log("test");
        feedService.parseFeed(src).then(function(res){
        	console.log('got feeds');
        	console.log($scope.feeds);
            return res.data.responseData.feed.entries;
            
            
        }, function(err) {
        	console.log('didnt get feeds');
        	console.log(err);
        	return {
            	teset: "nothing"
            };
        });
        
    };*/
	
/*	$scope.feeds = FeedList.get();
	$scope.$on('FeedList', function (event, data) {
		$scope.feeds = data;
	});*/
	$scope.feeds = [{title:"SpaceX Narrowly Misses Rocket Landing After Dragon Spaceship Launch Success",
		link:"http://www.space.com/29091-spacex-reusable-rocket-dragon-launch.html",
		description:"SpaceX's Falcon 9 rocket launched the company's Dragon cargo capsule toward the International Space Station today (April 14) and then returned to Earth, nearly pulling off an unprecedented landing on a floating platform in the Atlantic Ocean."},
		
		{title:"SpaceX Launches Mice and More To Space Station | Video",
		link:"http://www.space.com/29106-pacex-launches-mice-and-more-to-space-station-video.html",
		description:"Atop a Falcon 9 booster, SpaceX’s Dragon cargo spacecraft – loaded with 4,000+ lbs of supplies and experiments – was launched from the Cape Canaveral Air Force Station in Florida on April 14th, 2015."},
		
		{title:"Comet Comes to Life in Amazing Rosetta Spacecraft Photo Montage",
		link:"http://www.space.com/29105-comet-activity-amazing-rosetta-photo.html",
		description:"The heat is on the for the Comet 67P/ Churyumov-Gerasimenko as it sails ever closer to the sun, with the European Rosetta spacecraft snapping a stunning set of photos that the buzzing activity of the icy wanderer."},
		
		{title:"WATCH LIVE NOW: SpaceX Cargo Launch, Reusable Rocket Test",
		link:"http://www.space.com/17933-nasa-television-webcasts-live-space-tv.html",
		description:"SpaceX aims to launch its Dragon spacecraft toward the International Space Station today, then bring the first stage of its Falcon 9 rocket back to Earth for a landing. The liftoff is scheduled for 4:10 p.m. EDT; watch live here, beginning at 3 p.m. EDT."},
		
		{title:"'Windows To Space' + Rising Moon: Outside Space Station | Time-Lapse Video",
		link:"http://www.space.com/29102-windows-to-space-+-rising-moon-outside-space-station-time-lapse-video.html",
		description:"The International Space Station's cupola provides astronauts with stunning views of Earth and the cosmos. ESA astronaut Alexander Gerst can be seen within, as the exterior ballet of window covers proceeded."},
		
		{title:"Is Pluto Really Red? Chemistry Says It Could Be | Video",
		link:"http://www.space.com/29101-is-pluto-really-red-chemistry-says-it-could-be-video.html",
		description:"Ground-based and Hubble images of Pluto suggest it might be the reddest object in the Solar System. New Horizons' Principal Investigator Alan Stern explains how this could have happened."},];
	console.log($scope.feeds);

/*	$scope.feeds = $scope.getRSSFeed('www.space.com/home/feed/site.xml');
	console.log("what");
	console.log($scope.feeds);*/

});