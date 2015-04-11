var AchievementsView = function() {

    this.initialize = function() {
        this.el = $('<div/>');
    };

    this.render = function() {
        this.el.html(AchievementsView.template());
        return this;
    };


    this.initialize();

}

AchievementsView.template = Handlebars.compile($("#achievements-tpl").html());