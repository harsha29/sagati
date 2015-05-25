//controller sample definition provided
/*
//app is defined in app.js and will be available in all javascript files
// name the controller starting with Capital Letter and Suffix Ctrl

app.controller("SampleController", function($scope){
	//do whatever
});


*/

app.controller("AddTagCloudCtrl", function($scope, MockService){
	//load Master data 
	$scope.contentChoices =  MockService.getContentChoices();
	for(i=0;i<$scope.contentChoices;i++){
		$scope.contentChoices[i].isSelected = false;
	}

	$scope.engageTypes =  MockService.getEngageTypes();
	for(i=0;i<$scope.engageTypes;i++){
		$scope.engageTypes[i].isSelected = false;
	}

	$scope.fnSave = function(){
		//do your saving here 
		console.log($scope.title);
		console.log($scope.description);
		
		
		
		for(i=0;i<$scope.contentChoices.length;i++){
			if($scope.contentChoices[i].isSelected){
				console.log("Selected Content Type: "+$scope.contentChoices[i].contentType);
				}
		}

		for(i=0;i<$scope.engageTypes.length;i++){
			if($scope.engageTypes[i].isSelected)
				console.log("Selected Engagement Type: "+$scope.engageTypes[i].engageType);	
		}

		//once you have your variables use $.get(yourwebserviceurl, successcallbackfunction, failurecallbackfunction);
	}
});