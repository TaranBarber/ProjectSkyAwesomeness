var LessonsView = function() {

    this.initialize = function() {
        this.el = $('<div/>');
    };

    this.render = function() {
        this.el.html(LessonsView.template());
        return this;
    };


    this.initialize();

}

LessonsView.template = Handlebars.compile($("#lessons-tpl").html());