$(document).ready(function(){
	for (var x in courseList){
		$("#courses").append("<p>" + courseList[x].name + "</p>");
		$("#courses").append("<button id='" + courseList[x].name+ "'type='button' onClick='getDescr(this.id)'> Course Description</button>");
		$("#courses").append("<p id='" + courseList[x].name+ 'descr' + "'>" + courseList[x].description + "</p>")
		var n = '#' + courseList[x].name+ 'descr';
		$(n).hide();
	}		
})



function course(name, description){
	this.name = name;
	this.description = description;
	this.addToCourseList = function(){
		courseList.push(this);
	};
	this.addToCourseList();
};

function getDescr(clickedID){
	for(var x in courseList){
		if(courseList[x].name == clickedID){
			$(document).ready(function(){
				var n = '#' + clickedID + 'descr';
				$(n).toggle()
			})
		}
	}
}

/*
function getDescr(){
	$(document).ready(function(){
		while(true){
			for (var x in courseList){
				if(courseList[x].name == idOfElement)
				$(idOfElement).click(function(){
					$(idOfElement).toggle(courseList[x].descr)
				})
			}
		}
	})
}
*/

var courseList = []
var js = new course("Javascript","This is a class that covers Javascript")
var econs = new course("Economics","This is a class that covers Economics")
var chem = new course("Chemistry","This is a class that covers Chemistry")

