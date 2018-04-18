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
var categoryOption = $('#category');
var titleInput = $('#title');
var repesInput = $('#repes');

var contentTemplate = Handlebars.compile($('#entry-template').text());

function addContent(){
	if(categoryOption.val() && titleInput.val() && repesInput.val()){
		var newHabit = contentTemplate({
			category: categoryOption.val(),
			title: titleInput.val(),
			repes: repesInput.val(),
		});
		
		contentElement.html(newHabit + contentElement.html());
		//clean up inputs
		categoryOption.val('');
		titleInput.val('');
		repesInput.val('');	
	};
}
addButtonElement.on('click', addContent);