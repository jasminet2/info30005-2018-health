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

// 

var contentElement = $('#habitRow');
var addButtonElement = $('#addHabit');
var titleInput = $('#title');
var repesInput = $('#repes');

var contentTemplate = Handlebars.compile($('#entry-template').text());

function addContent(){
	var newHabit = contentTemplate({
		title: titleInput.val(),
		repes: repesInput.val(),
	});
	contentElement.html(newHabit + contentElement.html());
	//clean up inputs
	titleInput.val('');
	repesInput.val('');

}
addButtonElement.on('click', addContent);