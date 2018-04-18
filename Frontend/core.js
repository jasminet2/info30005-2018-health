<<<<<<< HEAD
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
=======
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

// Convert HTML form input into JSON object.
$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

$(function() {
    $('form').submit(function() {
        $('#result').text(JSON.stringify($('form').serializeObject()));
        return false;
    });
});
>>>>>>> e4ced0af3e2ab74bdaf771cb7b4cc7fafd681974
