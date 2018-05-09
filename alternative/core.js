
var d = new Date();
function formatDate(date) {
  var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var day = date.getDate();
  var dayIndex = date.getDay();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return day + ' ' + monthNames[monthIndex] + ' ' + year + ', ' + dayNames[dayIndex];
}
document.getElementById("today").innerHTML = formatDate(d);

var icons = ["https://png.icons8.com/ios/30/27ae60/clock-filled.png",
			"https://png.icons8.com/ios/30/c0392b/heart-health-filled.png",
			"https://png.icons8.com/ios/30/f1c40f/christmas-star-filled.png",
			"https://png.icons8.com/ios/30/d35400/exercise-filled.png",
			"https://png.icons8.com/ios/30/1abc9c/saving-book-filled.png"];

 
var contentElement = $('#daily');
var addButtonElement = $('#addHabit');
var categoryOption = $('#category');
var periodOption = $('#period');
var titleInput = $('#title');

var contentTemplate = Handlebars.compile($('#entry-template').text());


function addHabit() {
	if(categoryOption.val() && periodOption.val() && titleInput.val()){
		var newHabit = contentTemplate({
			imgURL: icons[parseInt(categoryOption.val())],
			title: titleInput.val()
		});
		if(periodOption.val() === "D"){
			contentElement = $('#daily');
			contentElement.html(newHabit + contentElement.html());
		}else if(periodOption.val() === "W"){
			contentElement = $('#weekly');
			contentElement.html(newHabit + contentElement.html());
		}else{
			contentElement = $('#monthly');
			contentElement.html(newHabit + contentElement.html());
		}
	}
	categoryOption.val('0');
	periodOption.val('D');
	titleInput.val('');	
	
};

addButtonElement.on('click', addHabit);