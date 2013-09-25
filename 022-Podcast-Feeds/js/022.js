// Works, but sometimes gives the origin problem
$.get("http://ws.audioscrobbler.com/2.0/user/bbc6music/weeklytrackchart.xml",
function(xmlData){
     var $page = $(xmlData);
     //you can now use all the jQuery to conquer the world
     $page.find("track:lt(20)").each(function(){
           var $data = $(this);
           console.log(artistName = $data.find("artist").text());
      });
});










// programmatically load a script tag on the page using the given url
function loadRemoteData(url) {
    var script = document.createElement("script");
    script.setAttribute("type","text/javascript");
    script.setAttribute("src", url);
    document.getElementsByTagName("head")[0].appendChild(script);
}

function processData(jsonResult) {
    alert(JSON.stringify(jsonResult)); //alert the JSON as a string
}

// make a request for the data using the script tag remoting approach.
loadRemoteData("http://joeroganexp.joerogan.libsynpro.com/rss?callback=processData");


// var url = 'http://joeroganexp.joerogan.libsynpro.com/rss';
// var data;

//     // via https://code.google.com/apis/ajax/playground/#historical_entries
    
//     google.load("feeds", "1");
    
//     // Our callback function, for when a feed is loaded.
//     function feedLoaded(result) {
//       if (!result.error) {
//         // Grab the container we will put the results into
//         var container = document.getElementById("content");
//         container.innerHTML = '';
//         data = result;
//         // Loop through the feeds, putting the titles onto the page.
//         // Check out the result object for a list of properties returned in each entry.
//         // http://code.google.com/apis/ajaxfeeds/documentation/reference.html#JSON
//         for (var i = 0; i < result.feed.entries.length; i++) {
//           var entry = result.feed.entries[i];
//           var div = document.createElement("div");
//           div.appendChild(document.createTextNode(i + ': ' + entry.title));
//           container.appendChild(div);
//         }
//       }
//     }
    
//     function OnLoad() {
//       // Create a feed instance that will grab Digg's feed.
//       var feed = new google.feeds.Feed(url);
    
//       feed.includeHistoricalEntries(); // tell the API we want to have old entries too
//       feed.setNumEntries(250); // we want a maximum of 250 entries, if they exist
    
//       // Calling load sends the request off.  It requires a callback function.
//       feed.load(feedLoaded);
//     }
    
//     google.setOnLoadCallback(OnLoad);





















// // var url = 'http://joeroganexp.joerogan.libsynpro.com/rss';
// // var myData;

// // via http://stackoverflow.com/a/6271906
// // function parseRSS(url, callback) {
// //   $.ajax({
// //     url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(url),
// //     dataType: 'xml',
// //     success: function(data) {
// //       callback(data.responseData.feed);
// //       console.log   (data.responseData.feed);
// //     }
// //   });
// // }

// // via http://stackoverflow.com/a/17078101
// // var feed = new google.feeds.Feed(url);

// // feed.load(function (data) {
// //     // Parse data depending on the specified response format, default is JSON.
// //     myData = data.feed.entries;
// //     console.dir(data.feed.entries);

// //     for (var i = 0; i < myData.length; i++) {
// //         console.log("---------------------------");
// //         console.log(myData[i].title);
// //         console.log(myData[i].link);
// //         console.log(myData[i].content);
// //     }
// // });


// // $.get(url, function (data) {
// //     $(data).find("entry").each(function () { // or "item" or whatever suits your feed
// //         var el = $(this);

// //         console.log("------------------------");
// //         console.log("title      : " + el.find("title").text());
// //         console.log("author     : " + el.find("author").text());
// //         console.log("description: " + el.find("description").text());
// //     });
// // });





// // $(function() {
    
// //     $.ajax({                                                                                                                                                                                                        
// //         type: 'GET',                                                                                                                                                                                                 
// //         url: 'http://api.stackoverflow.com/1.1/stats',                                                                                                                                              
// //         dataType: 'jsonp',                                                                                                                                                                                                
// //         success: function(data) { 
// //             console.log('Success!'); 
// //             callback(data.responseData.feed);
// //             console.log(data.responseData.feed);
// //             myData = data;
// //         },                                                                                                                                                                                       
// //         error: function() { console.log('Uh Oh!'); },
// //         jsonp: 'jsonp'                                                                                                                                                
// //     });    
    
// // });

