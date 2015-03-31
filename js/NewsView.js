var NewsView = function() {

    this.initialize = function() {
        this.el = $('<div/>');
        this.el.on('click', '.add-calendar-btn', this.addToCalendar);
        this.el.on('click', '.select-article-btn', this.selectArticle);
    };

    this.render = function() {
        this.el.html(NewsView.template());
        return this;
    };

    this.addToCalendar = function(event) {
/*         event.preventDefault();
        console.log('addEvent');
        navigator.geolocation.getCurrentPosition(
            function(position) {
                $('.location', this.el).html(position.coords.latitude + ',' +position.coords.longitude);
            },
            function() {
                alert('Error getting location');
            });
        return false; */
    };

    this.selectArticle = function(event) {
/*         event.preventDefault();
        console.log('changePicture');
        if (!navigator.camera) {
            app.showAlert("Camera API not supported", "Error");
            return;
        }
        var options =   {   quality: 50,
                            destinationType: Camera.DestinationType.DATA_URL,
                            sourceType: 1,      // 0:Photo Library, 1=Camera, 2=Saved Photo Album
                            encodingType: 0     // 0=JPG 1=PNG
                        };

        navigator.camera.getPicture(
            function(imageData) {
                $('#image').attr('src', "data:image/jpeg;base64," + imageData);
            },
            function() {
                alert('Error taking picture');
            },
            options);

        return false; */
    };

    this.initialize();

}

NewsView.template = Handlebars.compile($("#news-tpl").html());