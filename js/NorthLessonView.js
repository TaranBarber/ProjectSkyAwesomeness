var NorthLessonView = function() {

    this.initialize = function() {
        this.el = $('<div/>');
    };

    this.render = function() {
        this.el.html(NorthLessonView.template());
        return this;
    };


    this.initialize();

}

NorthLessonView.template = Handlebars.compile($("#northStarLesson-tpl").html());