
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');
    var city = $('#city').val();

    var allInputs = $( ":input" );
      var articles;
     
      link = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" 
      + city +
       "&format=json&callback=wikiCallback";

      var  wikiRequestTimeout = setTimeout ( function () {
$wikiElem.text("this api can not be reached");

       }, 


       8000);

$.ajax( {
    url: link, 

    dataType: "jsonp",
    success: function(response) {
       // do something with data
        var articleList =response[1];

       for(var i=0;i <articleList.length;i++) {
       var articleStr = articleList[i];
       var url ='http://en.wikipedia.org/wiki/' + articleStr;
        $wikiElem.append('<li><a href="' + url + '">' +
          articleStr + '</a></li>');

        
    
    };//end for
} //end function
});//end ajax


      /////
      
    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // ny times


    // YOUR CODE GOES HERE!
    var street =$("#street").val();
    var city = $("#city").val();
    var combin = street + " ," + city ;
    //var pic = ;
    //'<img class ="bgimg" src ="https://maps.googleapis.com/maps/api/streetview?size=600x300&location">')
    
    // append to end of greeting
    $("#greeting").text("You live at " + combin);
    var home ="https://maps.googleapis.com/maps/api/streetview?size=600x300&location=" + combin + "";

    $("body").append('<img class= "bgimg" src="'+ home +'">');
/// ney york times
var url = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + city + "&sort=newest&api-key=d14698a7655570fab6df56d1a8789557:16:73613299";


$.getJSON( url, function( data ) {
  // after i built map and started ny times section--- city);
  $nytHeaderElem.text('New York Times Articles About ' + city);

     articles =data.response.docs;
  for( var i=0; i< articles.length; i++) {
    //var whole = "<li id='article'>" + articles[i].headline.main +  "</li>" ;
     $(".article-list").append(" <li class='article'>" + articles[i].headline.main + "</li>");
      $(".article-list").append(" <li class='article'><a href ='" + articles[i].web_url +  "'> " + "click here" +" </a></li>");
  }
 }).error(function() {
    $nytHeaderElem.text("Ny times articles could not be loaded");
  });






  return false;
    };// end of container function


    $('#form-container').submit(loadData);

 //loadData();
