

// JavaScript Document

var d = new Date();
function formatDate(date) {
  var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return day + ' ' + monthNames[monthIndex] + ' ' + year;
}
document.getElementById("today").innerHTML = formatDate(d);

// Client-side templating 
var icons = ["https://png.icons8.com/ios/30/27ae60/clock-filled.png",
			"https://png.icons8.com/ios/30/c0392b/heart-health-filled.png",
			"https://png.icons8.com/ios/30/f1c40f/christmas-star-filled.png",
			"https://png.icons8.com/ios/30/d35400/exercise-filled.png",
			"https://png.icons8.com/ios/30/1abc9c/saving-book-filled.png"];

var contentElement = $('#habitRow');
var addButtonElement = $('#addHabit');
var categoryOption = $('#category');
var titleInput = $('#title');
var repesInput = $('#repes');
var counter = 0;

var contentTemplate = Handlebars.compile($('#entry-template').text());

function addContent(){
	if(categoryOption.val() && titleInput.val() && repesInput.val()){
		var newHabit = contentTemplate({
			imgURL: icons[parseInt(categoryOption.val())],
			title: titleInput.val(),
			repes: repesInput.val(),
			counter: counter
		});
		
		contentElement.html(newHabit + contentElement.html());
		
	
		

		//clean up inputs
		counter++;
		categoryOption.val('');
		titleInput.val('');
		repesInput.val('');
		
	
	}
}
addButtonElement.on('click', addContent);




//Change the background of div's based on values:



