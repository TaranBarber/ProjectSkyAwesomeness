var StarChartView = function() {

    this.initialize = function() {
        this.el = $('<div/>');
    };

    this.render = function() {
        this.el.html(StarChartView.template());
        return this;
    };

    this.initialize();

}

StarChartView.template = Handlebars.compile($("#charts-tpl").html());