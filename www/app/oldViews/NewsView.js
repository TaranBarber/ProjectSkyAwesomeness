var NewsView = function() {

    this.initialize = function() {
        this.el = $('<div/>');
        this.el.on('click', '.add-calendar-btn', this.addToCalendar);
        this.el.on('click', '.select-article-btn', this.selectArticle);
    };

    this.render = function() {
        this.el.html(NewsView.template());
        return this;
    };

    this.getRSSFeed = function(feed){
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


    this.initialize();
    this.getRSSFeed('www.space.com/home/feed/site.xml');

}

NewsView.template = Handlebars.compile($("#news-tpl").html());