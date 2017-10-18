
/*
function initialize() {
	var input = document.getElementById('myLocation');
	var autocomplete = new google.maps.places.Autocomplete(input);
}

google.maps.event.addDomListener(window, 'load', initialize);

*/

$("#emergencyBtn").on('click', function() {
  $("#locationSubmit").attr("action", "/emergency");
});
$("#dangerBtn").on('click', function() {
  $("#locationSubmit").attr("action", "/danger");
});
$("#friendsBtn").on('click', function() {
  $("#locationSubmit").attr("action", "/friends");
});
$("#tipsBtn").on('click', function() {
  $("#locationSubmit").attr("action", "/tips");
});

$("#alcPoisonBtn").click(function(){
    $("#alcPoison").toggle();
});

$("#sexualAssaultBtn").click(function(){
    $("#sexualAssault").toggle();
});

$("#firstAidBtn").click(function(){
    $("#firstAid").toggle();
});

$(document).ready(function() {
	var currentBoxNumber = 0;
	$(".form-control").keydown(function (event) {
		console.log(event)
	    if (event.keyCode == 13) {
	        textboxes = $(".form-control");
	        currentBoxNumber = textboxes.index(this);
	        console.log(textboxes, textboxes.index(this));
	        if (textboxes[currentBoxNumber + 1] != null) {
	            nextBox = textboxes[currentBoxNumber + 1];
	            nextBox.focus();
	            nextBox.select();
	            event.preventDefault();
	            return false;
	        }
	    }
	});
});