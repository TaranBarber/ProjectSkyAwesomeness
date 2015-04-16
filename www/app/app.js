document.addEventListener('polymer-ready', function() {
    var navicon = document.getElementById('navicon');
    var drawerPanel = document.getElementById('drawerPanel');

    navicon.addEventListener('click', function() {
      drawerPanel.togglePanel();
    });

 });

/*
 * bootstrapping angular with cordova
 */
angular.module('fsCordova', [])
.service('CordovaService', ['$document', '$q',
  function ($document, $q) {

      var d = $q.defer(),
          resolved = false;

      var self = this;
      this.ready = d.promise;

      document.addEventListener('deviceready', function () {
          resolved = true;
          d.resolve(window.cordova);
      });

      // Check to make sure we didn't miss the 
      // event (just in case)
      setTimeout(function () {
          if (!resolved) {
              if (window.cordova) d.resolve(window.cordova);
          }
      }, 3000);
  }]);

/*
 * The main app
 */
angular.module('starApp', ['fsCordova', 'ui.router', 'ngResource'])

/*angular.module('starApp', [])*/
.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /home
  $urlRouterProvider.otherwise("/home");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "pages/home.html"
    })
    .state('achievements', {
    	url: "/achievements",
    	templateUrl: "pages/achievements.html"
    })
    .state('camera', {
    	url: "/camera",
    	templateUrl: "pages/camera.html"
    })
    .state('charts', {
    	url: "/charts",
    	templateUrl: "pages/charts.html",
    	controller: "ChartsCtrl"
    })
    .state('lessons', {
    	url: "/lessons",
    	templateUrl: "pages/lessons.html"
    })
    .state('news', {
      url: "/news",
      templateUrl: "pages/news.html",
      controller: 'NewsCtrl'
    })
    .state('weather', {
    	url: "/weather",
    	templateUrl: "pages/weather.html",
    });
    
/*  Example of state
 *   .state('state2.list', {
      url: "/list",
      templateUrl: "pages/state2.list.html",
      controller: function($scope) {
        $scope.things = ["A", "Set", "Of", "Things"];
      }
    });*/
});

angular.module('starApp')
.controller('AppCtrl', ['$scope', 'CordovaService',
  function($scope, CordovaService){

    $scope.ready = false;

    // when cordova is ready
    CordovaService.ready.then(
      function resolved(resp) {
         $scope.ready = true;  
      },
      function rejected(resp){
        throw new Error(resp);
      });
    
/*    $scope.toggleSidenav = function(menuId) {
        $mdSidenav(menuId).toggle();
    };*/
    
  }
]);
