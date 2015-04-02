var NorthView = function() {

    this.initialize = function() {
        this.el = $('<div/>');
    };

    this.render = function() {
        this.el.html(NorthView.template());
        return this;
    };


    this.initialize();

}

NorthView.template = Handlebars.compile($("#northStarBrowse-tpl").html());