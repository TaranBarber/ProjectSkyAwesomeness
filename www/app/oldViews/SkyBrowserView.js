var SkyBrowserView = function() {

    this.initialize = function() {
        this.el = $('<div/>');
    };

    this.render = function() {
        this.el.html(SkyBrowserView.template());
        return this;
    };


    this.initialize();

}

SkyBrowserView.template = Handlebars.compile($("#skybrowser-tpl").html());