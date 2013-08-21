// set the variables
var data, template, html;  

// our data! 
data = {  
    title : "Albums by The Doors",  
    albums: [  "The Doors", 
              "Strange Days", 
              "Waiting for the Sun", 
              "The Soft Parade", 
              "Morrison Hotel", 
              "LA Woman"
            ]
};

// core template of the HTML we'll write into  
template = "\
<h1>{{title}}</h1>\
<ul>\
  {{#albums}}\
  <li> {{.}} </li>\
  {{/albums}}\
</ul>\
";

// the HTML that gets spit out
html = Mustache.to_html(template, data);  
  
// put that HTML into the DOM
document.getElementById('target').innerHTML = html;