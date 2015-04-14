var OptionsView = function() {

    this.initialize = function() {
        this.el = $('<div/>');
    };

    this.render = function() {
        this.el.html(OptionsView.template());
        return this;
    };

    this.initialize();

}

OptionsView.template = Handlebars.compile($("#options-tpl").html());