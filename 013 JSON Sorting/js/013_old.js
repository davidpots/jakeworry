var data;

// ===============================================
  // Fetch the data
  // ===============================================

      $.ajax({
        async: false,
        url: 'acc.json',
        success: function(myJson) {
          data = myJson;
        }
      });



      


// I started with this one but ran into string/object/array headaches
// http://jsfiddle.net/VAKrE/378/
function sortJSON(data, key) {
    return data.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}



console.log("Before sort: " + JSON.stringify(data));
jsonBefore = JSON.stringify(data);
document.getElementById('before').innerHTML = jsonBefore;

sortJSON(data.acc, 'mascot');

console.log("After sort: " + JSON.stringify(data));
jsonAfter = JSON.stringify(data);
document.getElementById('after').innerHTML = jsonAfter;





// core template of the HTML we'll write into  
template = "\
<ul class='songlist'>\
  {{#acc}}\
  <li>\
    <a>\
      <h2>{{school}}</h2>\
      <p>{{cost}}</p>\
      <p>{{mascot}}</p>\
    </a>\
  </li>\
  {{/acc}}\
</ul>\
";

// via http://stackoverflow.com/questions/979256/sorting-an-array-of-javascript-objects
var sort_by = function(field, reverse, primer){
   var key = function (x) {return primer ? primer(x[field]) : x[field]};
   return function (a,b) {
       var A = key(a), B = key(b);
       return ((A < B) ? -1 : (A > B) ? +1 : 0) * [-1,1][+!!reverse];                  
   }
}

jsonLive = JSON.stringify(data);
document.getElementById('live').innerHTML = jsonLive;

// Sort by key
$('#liveSchool').click(function(){
  data.acc.sort(sort_by('school', true));
  html = Mustache.to_html(template, data);
  document.getElementById('live').innerHTML = html;
  return false;
});

// Sort by status
$('#liveMascot').click(function(){
  data.acc.sort(sort_by('mascot', true));
  html = Mustache.to_html(template, data);
  document.getElementById('live').innerHTML = html;
  return false;
});

// Sort by cost
$('#liveCost').click(function(){
  data.acc.sort(sort_by('cost', false, parseInt));
  html = Mustache.to_html(template, data);
  document.getElementById('live').innerHTML = html;
  return false;
});
























// Sort by price, high to low
data.acc.sort(sort_by('cost', false, parseInt));
// Sort by city, A-Z
data.acc.sort(sort_by('school', true));
// etc

for (var i = 0; i < data.acc.length; i++) {
    // Loop through array, display city name
    console.log(data.acc[i].school);
}