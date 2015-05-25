<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width">
    	<meta name="apple-mobile-web-app-capable" content="yes">
		<title>Home</title>
		<!--Lib-->
		<link rel="stylesheet" type="text/css" href="resources/lib/css/bootstrap.css">
		<link rel="stylesheet" type="text/css" href="resources/lib/css/font-awesome.css">
		<link rel="stylesheet" type="text/css" href="resources/lib/css/animate.css">
		<script type="text/javascript" dat-main="resources/js/main" src="resources/lib/js/require.js"></script>
		<script type="text/javascript" src="resources/lib/js/jquery.js"></script>
		<script type="text/javascript" src="resources/lib/js/bootstrap.js"></script>
		<script type="text/javascript" src="resources/lib/js/angular.min.js"></script>
		<script type="text/javascript" src="resources/lib/js/angular-route.js"></script>
		<script type="text/javascript" src="resources/lib/js/angular-messages.js"></script>
		<!--App files-->
		<link rel="stylesheet" type="text/css" href="resources/css/style.css">
		<script type="text/javascript" src="resources/js/app.js"></script>
		<script type="text/javascript" src="resources/js/controllers.js"></script>
		<script type="text/javascript" src="resources/js/directives.js"></script>
		<script type="text/javascript" src="resources/js/filters.js"></script>
		<script type="text/javascript" src="resources/js/services.js"></script>
	</head>
	<body ng-app="harshaApp">
		<div app-header></div><!--Menu directive-->
		<div ng-view></div><!--ng-view where all routes will be loaded-->
		<div app-footer></div><!--Footer Directive , this can also be ng-include if the content is static-->
	</body>
</html>