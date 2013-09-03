// via http://stackoverflow.com/questions/979256/sorting-an-array-of-javascript-objects
var sort_by = function(field, reverse, primer){
   var key = function (x) {return primer ? primer(x[field]) : x[field]};
   return function (a,b) {
       var A = key(a), B = key(b);
       return ((A < B) ? -1 : (A > B) ? +1 : 0) * [-1,1][+!!reverse];                  
   }
}


// Now you can sort by any field at will...
var homes = [{

   "h_id": "3",
   "city": "Dallas",
   "state": "TX",
   "zip": "75201",
   "price": "2500"

}, {

   "h_id": "4",
   "city": "Alabama",
   "state": "CA",
   "zip": "90210",
   "price": "319250"

},{

   "h_id": "4",
   "city": "Maryland",
   "state": "CA",
   "zip": "90210",
   "price": "87519250"

},{

   "h_id": "4",
   "city": "Zaire",
   "state": "CA",
   "zip": "90210",
   "price": "519250"

},{

   "h_id": "4",
   "city": "Bevery Hills",
   "state": "CA",
   "zip": "90210",
   "price": "19250"

}, {

   "h_id": "5",
   "city": "New York",
   "state": "NY",
   "zip": "00010",
   "price": "4962500"

}];

// Sort by price, high to low
homes.sort(sort_by('price', false, parseInt));

// Sort by city, A-Z
homes.sort(sort_by('city', true));

// etc

for (var i = 0; i < homes.length; i++) {
    // Loop through array, display city name
    console.log(homes[i].city);
}