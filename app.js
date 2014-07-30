$(document).ready( function() {
	Apple()
});
var Apple = function() {
	 $.getJSON(
	 "http://www.reddit.com/r/technology/hot.json?jsonp=?",
        function foo(data)
        {
          $.each(
            data.data.children.slice(0, 25),
            function (i, post) {
              $(".feed").append( '<div class = "template"> <p class="title"> <br> <a href ="' + post.data.url + '">'  + post.data.title + '</p> </a> <p class="text">  <br> +' + post.data.ups + '</p> </div' );
 
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
              $(".feed").append( '<div class = "template"> <p class="title"> <br> <a href ="' + post.data.url + '">'  + post.data.title + '</p> </a> <p class="text">  <br> +' + post.data.ups + '</p> </div' );
 
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
              $(".feed").append( '<div class = "template"> <p class="title"> <br> <a href ="' + post.data.url + '">'  + post.data.title + '</p> </a> <p class="text">  <br> +' + post.data.ups + '</p> </div' );
 
            }
          )
        })
 })
	  $("#three").on("click", function(){
	 	 $(".template").remove();
	 	 $(".search").hide();
	 $.getJSON(
	 "http://www.reddit.com/r/teslamotors/hot.json?jsonp=?",
        function foo(data)
        {
          $.each(
            data.data.children.slice(0, 25),
            function (i, post) {
              $(".feed").append( '<div class = "template"> <p class="title"> <br> <a href ="' + post.data.url + '">'  + post.data.title + '</p> </a> <p class="text">  <br> +' + post.data.ups + '</p> </div' );
 
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
              $(".feed").append( '<div class = "template"> <p class="title"> <br> <a href ="' + post.data.url + '">'  + post.data.title + '</p> </a> <p class="text">  <br> +' + post.data.ups + '</p> </div' );
 
            }
          )
        })
 })
	    $("#five").on("click", function(){
	     var link = [];
	     $(".template").remove();
	     $(".feed").hide();
	 	 $(".search").show();
	 	  alert("If nothing comes up when you enter text into the search bar, the subreddit does not exist. Enter a diffrent topic or company till posts come up.");
	 	 $(".search").keydown(function(event) {
	  		if (event.which == 13){
	  			var value = $("input").val().trim();
	  			$("input").val("").select();
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
              $(".feed").append( '<div class = "template"> <p class="title"> <br> <a href ="' + post.data.url + '">'  + post.data.title + '</p> </a> <p class="text">  <br> +' + post.data.ups + '</p> </div' );
        })
        })
 		}
}
})
	})
	    console.log($(".template").length)
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
              $(".feed").append( '<div class = "template"> <p class="title"> <br> <a href ="' + post.data.url + '">'  + post.data.title + '</p> </a> <p class="text">  <br> +' + post.data.ups + '</p> </div' );
 
            }
          )
        })
 })
};