//All directives definition will be done here
/*
//prepared by Chandoo for TSO
Sample directive
directive name is camel case myNewDirective , in  the view it is used as my-new-directive

app.directive("myNewDirective", function(<inject necessary services if neede>){
	return{
		restrict: "EA", //E is element and A is attribute
		scope: {}, // if you need a isolated scope
		controller: function(){}, //if you need a controller for directive - usually  use it only when required
		template: "enter your html code here", // or point to an external file with templateUrl attribute
		link: function(s,e,a){ // gives you reference to Scope , Element to which directive is tagged, attribtes defined for the directive
			// do you dom manipulation here
		}
	}
});

*/

app.directive("appHeader", function($location,$rootScope,MockService){
	return{
		templateUrl: "templates/directives/menu.html",
		link: function(s,e,a){
			s.menuItems = MockService.getMenuItems();
			$rootScope.$on("$locationChangeSuccess", function(){

				for(i=0;i<s.menuItems.length;i++){
					if(s.menuItems[i].link.replace('#','') ==$location.path().replace('\/','')){
						
						for(j=0;j<s.menuItems.length;j++)
							s.menuItems[j].isActive = false;
						s.menuItems[i].isActive = true;
					}
				}
			});
		}
	}
});


app.directive("appFooter", function($location,$rootScope,MockService){
	return{
		templateUrl:"templates/directives/footer.html",
		link: function(s,e,a){
			}
		}
	});