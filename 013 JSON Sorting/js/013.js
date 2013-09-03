var data;

// ===============================================
  // Fetch the data
  // ===============================================

      $.ajax({
        async: false,
        url: 'people.json',
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
sortJSON(data.people, 'myKey');
console.log("After sort: " + JSON.stringify(data));







// Then found this one which works but seems like it may be overkill for my current barebones requirements. Mess with stripping down later?
// via http://stackoverflow.com/questions/979256/sorting-an-array-of-javascript-objects
var sort_by = function(field, reverse, primer){
   var key = function (x) {return primer ? primer(x[field]) : x[field]};
   return function (a,b) {
       var A = key(a), B = key(b);
       return ((A < B) ? -1 : (A > B) ? +1 : 0) * [-1,1][+!!reverse];                  
   }
}

// Sort by price, high to low
data.people.sort(sort_by('price', false, parseInt));
// Sort by city, A-Z
data.people.sort(sort_by('myKey', true));
// etc

for (var i = 0; i < data.people.length; i++) {
    // Loop through array, display city name
    console.log(data.people[i].myKey);
}