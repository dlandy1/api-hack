$(document).ready( function() {
	Apple()
});
var Apple = function(tags) {
	 $.getJSON(
	 "http://www.reddit.com/r/technology/hot.json?jsonp=?",
        function foo(data)
        {
          $.each(
            data.data.children.slice(0, 10),
            function (i, post) {
              $(".container").append( '<div class = "template"> <p class="title"> <br> <a href ="' + post.data.url + '">'  + post.data.title + '</p> </a> <p class="text">  <br> Upvotes:' + post.data.ups + '</p> </div' );
 
            }
          )
 })
	 $("#one").on("click", function(){
	 	$(".template").remove();
	 $.getJSON(
	 "http://www.reddit.com/r/apple/hot.json?jsonp=?",
        function foo(data)
        {
          $.each(
            data.data.children.slice(0, 10),
            function (i, post) {
              $(".container").append( '<div class = "template"> <p class="title"> <br> <a href ="' + post.data.url + '">'  + post.data.title + '</p> </a> <p class="text">  <br> Upvotes:' + post.data.ups + '</p> </div' );
 
            }
          )
        })
 })
	 $("#two").on("click", function(){
	 	 $(".template").remove();
	 $.getJSON(
	 "http://www.reddit.com/r/google/hot.json?jsonp=?",
        function foo(data)
        {
          $.each(
            data.data.children.slice(0, 10),
            function (i, post) {
              $(".container").append( '<div class = "template"> <p class="title"> <br> <a href ="' + post.data.url + '">'  + post.data.title + '</p> </a> <p class="text">  <br> Upvotes:' + post.data.ups + '</p> </div' );
 
            }
          )
        })
 })
	  $("#three").on("click", function(){
	 	 $(".template").remove();
	 $.getJSON(
	 "http://www.reddit.com/r/tesla/hot.json?jsonp=?",
        function foo(data)
        {
          $.each(
            data.data.children.slice(0, 10),
            function (i, post) {
              $(".container").append( '<div class = "template"> <p class="title"> <br> <a href ="' + post.data.url + '">'  + post.data.title + '</p> </a> <p class="text">  <br> Upvotes:' + post.data.ups + '</p> </div' );
 
            }
          )
        })
 })
	   $("#four").on("click", function(){
	 	 $(".template").remove();
	 $.getJSON(
	 "http://www.reddit.com/r/facebook/hot.json?jsonp=?",
        function foo(data)
        {
          $.each(
            data.data.children.slice(0, 10),
            function (i, post) {
              $(".container").append( '<div class = "template"> <p class="title"> <br> <a href ="' + post.data.url + '">'  + post.data.title + '</p> </a> <p class="text">  <br> Upvotes:' + post.data.ups + '</p> </div' );
 
            }
          )
        })
 })
	    $("#five").on("click", function(){
	 	 $(".template").remove();
	 $.getJSON(
	 "http://www.reddit.com/r/amazon/hot.json?jsonp=?",
        function foo(data)
        {
          $.each(
            data.data.children.slice(0, 10),
            function (i, post) {
              $(".container").append( '<div class = "template"> <p class="title"> <br> <a href ="' + post.data.url + '">'  + post.data.title + '</p> </a> <p class="text">  <br> Upvotes:' + post.data.ups + '</p> </div' );
 
            }
          )
        })
 })
	     $("#zero").on("click", function(){
	 	 $(".template").remove();
	 $.getJSON(
	 "http://www.reddit.com/r/technology/hot.json?jsonp=?",
        function foo(data)
        {
          $.each(
            data.data.children.slice(0, 10),
            function (i, post) {
              $(".container").append( '<div class = "template"> <p class="title"> <br> <a href ="' + post.data.url + '">'  + post.data.title + '</p> </a> <p class="text">  <br> Upvotes:' + post.data.ups + '</p> </div' );
 
            }
          )
        })
 })
};