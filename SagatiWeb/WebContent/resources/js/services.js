app.service("MockService", function(){
	//this is a mock service
	_menuData = [
					{
						displayText: "Home",
						link:"#Home",
						isActive:true
					},
					{
						displayText: "About Us",
						link:"#AboutUs",
						isActive:false
					},
					{
						displayText: "Services",
						link:"#Services",
						isActive:false
					},
					{
						displayText: "Portfolio",
						link:"#Portfolio",
						isActive:false
					},
					{
						displayText: "Clients",
						link:"#Clients",
						isActive:false
					},
					{
						displayText: "Team",
						link:"#Team",
						isActive:false
					},
					{
						displayText: "Add Tag Cloud",
						link:"#AddTagCloud",
						isActive:false
					}
				];
	this.getMenuItems = function(){
		return _menuData;
	}

	_contentChoices = [
		{contentType: "Videos", contentTypeId: 1},
		{contentType: "Movies", contentTypeId: 2},
		{contentType: "Songs", contentTypeId: 3},
		{contentType: "Books", contentTypeId: 4},
		{contentType: "Research Materials", contentTypeId: 5},
		{contentType: "Blogs", contentTypeId: 6},
		{contentType: "Facebook Feeds", contentTypeId: 7}
	];

	this.getContentChoices = function(){
		return _contentChoices;
	}

	_engageTypes = [
		{engageType: "Polls", engageTypeId: 1},
		{engageType: "Discussions", engageTypeId: 2},
		{engageType: "Games", engageTypeId: 3},
		{engageType: "Points", engageTypeId: 4}
	];

	this.getEngageTypes = function(){
		return _engageTypes;
	}
});

