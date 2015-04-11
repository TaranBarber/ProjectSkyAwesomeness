var WeatherView = function() {

    this.initialize = function() {
        this.el = $('<div/>');
    };

    this.render = function() {
        this.el.html(WeatherView.template());
        return this;
    };

    this.initialize();

}

WeatherView.template = Handlebars.compile($("#weather-tpl").html());