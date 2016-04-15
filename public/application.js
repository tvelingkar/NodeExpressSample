var appName = 'mean';
var app = angular.module(appName, ['ngResource', 'ngRoute', 'example', 'users', 'todos']);

angular.element(document).ready(function() {
	angular.bootstrap(document, [appname]);
});

app.config(['$locationProvider', function($locationProvider) {
	$locationProvider.hashPrefix('!');
}]);

if (window.location.hash === '#_=_') window.location.hash = '#!';