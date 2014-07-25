$(document).ready( function() {
	Apple()
});
var Apple = function(tags) {
	 $.getJSON(
	 "http://www.reddit.com/r/technology/hot.json?jsonp=?",
        function foo(data)
        {
          $.each(
            data.data.children.slice(0, 25),
            function (i, post) {
              $(".feed").append( '<div class = "template"> <p class="title"> <br> <a href ="' + post.data.url + '">'  + post.data.title + '</p> </a> <p class="text">  <br> Upvotes:' + post.data.ups + '</p> </div' );
 
            }
          )
 })
	 $("#one").on("click", function(){
	 	$(".template").remove();
	 	$(".search").hide();
	 $.getJSON(
	 "http://www.reddit.com/r/apple/hot.json?jsonp=?",
        function foo(data)
        {
          $.each(
            data.data.children.slice(0, 25),
            function (i, post) {
              $(".feed").append( '<div class = "template"> <p class="title"> <br> <a href ="' + post.data.url + '">'  + post.data.title + '</p> </a> <p class="text">  <br> Upvotes:' + post.data.ups + '</p> </div' );
 
            }
          )
        })
 })
	 $("#two").on("click", function(){
	 	 $(".template").remove();
	 	 $(".search").hide();
	 $.getJSON(
	 "http://www.reddit.com/r/google/hot.json?jsonp=?",
        function foo(data)
        {
          $.each(
            data.data.children.slice(0, 25),
            function (i, post) {
              $(".feed").append( '<div class = "template"> <p class="title"> <br> <a href ="' + post.data.url + '">'  + post.data.title + '</p> </a> <p class="text">  <br> Upvotes:' + post.data.ups + '</p> </div' );
 
            }
          )
        })
 })
	  $("#three").on("click", function(){
	 	 $(".template").remove();
	 	 $(".search").hide();
	 $.getJSON(
	 "http://www.reddit.com/r/tesla/hot.json?jsonp=?",
        function foo(data)
        {
          $.each(
            data.data.children.slice(0, 25),
            function (i, post) {
              $(".feed").append( '<div class = "template"> <p class="title"> <br> <a href ="' + post.data.url + '">'  + post.data.title + '</p> </a> <p class="text">  <br> Upvotes:' + post.data.ups + '</p> </div' );
 
            }
          )
        })
 })
	   $("#four").on("click", function(){
	 	 $(".template").remove();
	 	 $(".search").hide();
	 $.getJSON(
	 "http://www.reddit.com/r/facebook/hot.json?jsonp=?",
        function foo(data)
        {
          $.each(
            data.data.children.slice(0, 25),
            function (i, post) {
              $(".feed").append( '<div class = "template"> <p class="title"> <br> <a href ="' + post.data.url + '">'  + post.data.title + '</p> </a> <p class="text">  <br> Upvotes:' + post.data.ups + '</p> </div' );
 
            }
          )
        })
 })
	    $("#five").on("click", function(){
	     var link = [];
	     $(".template").remove();
	     $(".feed").hide();
	 	 $(".search").show();
	 	 $(".search").keydown(function(event) {
	  		if (event.which == 13){
	  			var value = $("input").val().trim();
	  			if (value.length == 0){
	  				alert("put in text")
	  				}
	  			else {
	  			 $(".feed").show();
	  			 $(".template").remove();
	 	  $.getJSON(
	 'http://www.reddit.com/r/' + value + '/hot.json?jsonp=?',
        function foo(data)
        {
          $.each(
            data.data.children.slice(0, 25),
            function (i, post) {
            	link.push(1);
            	console.log(link.length);
 			if(link.length == 0){
 				alert("no existing subreddit")
 			}
              $(".feed").append( '<div class = "template"> <p class="title"> <br> <a href ="' + post.data.url + '">'  + post.data.title + '</p> </a> <p class="text">  <br> Upvotes:' + post.data.ups + '</p> </div' );
 			}
          )
        })
	 	  if(link.length == 0){
 				alert("no existing subreddit")
 			}
}
}
})
})
	     $("#zero").on("click", function(){
	     $(".search").hide();
	 	 $(".template").remove();
	 $.getJSON(
	 "http://www.reddit.com/r/technology/hot.json?jsonp=?",
        function foo(data)
        {
          $.each(
            data.data.children.slice(0, 25),
            function (i, post) {
              $(".feed").append( '<div class = "template"> <p class="title"> <br> <a href ="' + post.data.url + '">'  + post.data.title + '</p> </a> <p class="text">  <br> Upvotes:' + post.data.ups + '</p> </div' );
 
            }
          )
        })
 })
};