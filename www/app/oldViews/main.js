var app = {

    showAlert: function (message, title) {
        if (navigator.notification) {
            navigator.notification.alert(message, null, title, 'OK');
        } else {
            alert(title ? (title + ": " + message) : message);
        }
    },

    registerEvents: function() {
        $(window).on('hashchange', $.proxy(this.route, this));
        $('body').on('mousedown', 'a', function(event) {
            $(event.target).addClass('tappable-active');
        });
        $('body').on('mouseup', 'a', function(event) {
            $(event.target).removeClass('tappable-active');
        });
    },

    route: function() {
        var self = this;
        var hash = window.location.hash;
        if (!hash) {
            if (this.homePage) {
                this.slidePage(this.homePage);
            } else {
                this.homePage = new HomeView().render();
                this.slidePage(this.homePage);
            }
            return;
        }

        if (hash == this.optionsURL) {

			self.slidePage(new OptionsView().render());
        }
		
		if (hash == this.achievementsURL) {
			self.slidePage(new AchievementsView().render());
		}
		if (hash == this.lessonsURL) {
			self.slidePage(new LessonsView().render());
		}
        if (hash == this.northStarLessonURL) {
            self.slidePage(new NorthLessonView().render());
        }
        if (hash == this.northStarBrowseURL) {
            self.slidePage(new NorthView().render());
        }
		if (hash == this.cameraURL) {
			self.slidePage(new CameraView().render());
		}
		if (hash == this.newsURL) {
			self.slidePage(new NewsView().render());
		}
		if (hash == this.skyBrowserURL) {
			self.slidePage(new SkyBrowserView().render());
		}
		if (hash == this.starChartURL) {
			self.slidePage(new StarChartView().render());
		}
		if (hash == this.weatherURL) {
			self.slidePage(new WeatherView().render());
		}

		
    },

    slidePage: function(page) {

        var currentPageDest,
            self = this;

        // If there is no current page (app just started) -> No transition: Position new page in the view port
        if (!this.currentPage) {
            $(page.el).attr('class', 'page stage-center');
            $('body').append(page.el);
            this.currentPage = page;
            return;
        }

        // Cleaning up: remove old pages that were moved out of the viewport
        $('.stage-right, .stage-left').not('.homePage').remove();

        if (page === app.homePage) {
            // Always apply a Back transition (slide from left) when we go back to the search page
            $(page.el).attr('class', 'page stage-left');
            currentPageDest = "stage-right";
        } else {
            // Forward transition (slide from right)
            $(page.el).attr('class', 'page stage-right');
            currentPageDest = "stage-left";
        }

        $('body').append(page.el);

        // Wait until the new page has been added to the DOM...
        setTimeout(function() {
            // Slide out the current page: If new page slides from the right -> slide current page to the left, and vice versa
            $(self.currentPage.el).attr('class', 'page transition ' + currentPageDest);
            // Slide in the new page
            $(page.el).attr('class', 'page stage-center transition');
            self.currentPage = page;
        });

    },

    initialize: function() {
        var self = this;
		
		this.achievementsURL = '#achievements';
		this.lessonsURL = '#lessons';
		this.cameraURL = '#camera';
		this.newsURL = '#news';
		this.optionsURL = '#options';
		this.skyBrowserURL = '#skybrowser';
		this.starChartURL = '#charts';
		this.weatherURL = '#weather';
		this.northStarLessonURL = '#lessons/northStar'
		this.northStarBrowseURL = '#skybrowser/northStar'
		
        this.registerEvents();
        self.route();
        
    }

};

app.initialize();