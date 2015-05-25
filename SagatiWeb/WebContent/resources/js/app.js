app = angular.module("harshaApp", ["ngRoute","ngMessages"]);

//any code at application can be placed here, basically bootstrapping all info in this file

//define your routes

app.config(function($routeProvider, $locationProvider) {

  $routeProvider
       .when("/",{
        templateUrl:"templates/home.html"
       })
       .when("/Home",{
        templateUrl:"templates/home.html"
       })
       .when("/AboutUs",{
        templateUrl:"templates/aboutus.html"
       })
       .when("/Services",{
        templateUrl:"templates/services.html"
       })
       .when("/Portfolio",{
        templateUrl:"templates/portfolio.html"
       })
       .when("/Clients",{
        templateUrl:"templates/clients.html"
       })
       .when("/Team",{
        templateUrl:"templates/team.html"
       })
       .when("/Contact",{
        templateUrl:"templates/contact.html"
       })
       .when("/AddTagCloud",{
        templateUrl:"templates/addtagcloud.html"
       })
       ;

});	