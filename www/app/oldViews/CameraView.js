var CameraView = function() {

    this.initialize = function() {
        this.el = $('<div/>');
    };

    this.render = function() {
        this.el.html(CameraView.template());
        return this;
    };
	
    this.initialize();
}

CameraView.template = Handlebars.compile($("#camera-tpl").html());