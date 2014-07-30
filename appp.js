$(document).ready( function() {
	result;
});
var result = $.ajax({
		url: "http://www.reddit.com/r/technology/hot",
		dataType: "jsonp",
		type: "GET",
		})