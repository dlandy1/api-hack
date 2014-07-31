$(document).ready( function() {
$.ajax({
 url: "http://www.reddit.com/r/technology/hot",
 dataType: 'json',
 success: function( data ) {
   console.log( 'SUCCESS: ', data );
 },
 error: function( data ) {
   console.log( 'ERROR: ', data );
 }
})
});
