// ===============================================
// Setup the HTML Mustache template
// ===============================================

      // This is what we'll eventually dump the content into
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

// ===============================================
// Setup the Sort function
// ===============================================

      // via http://stackoverflow.com/questions/979256/sorting-an-array-of-javascript-objects
      // give either "true" or "false" to the "reverse" parameter to swap asc/desc
      // the "primer" paramater is optional
      var sort_by = function(field, reverse, primer){
         var key = function (x) {return primer ? primer(x[field]) : x[field]};
         return function (a,b) {
             var A = key(a), B = key(b);
             return ((A < B) ? -1 : (A > B) ? +1 : 0) * [-1,1][+!!reverse];                  
         }
      }

// ===============================================
// Fetch the data
// ===============================================

      var data;
      $.ajax({
        async: false,
        url: 'acc.json',
        success: function(myJson) {
          data = myJson;
        }
      });
      // the JSON is now accessible via the variable "data"

// ===============================================
// Example usage, dumped to console
// ===============================================

      // Show the default state of the JSON data
      jsonBefore = JSON.stringify(data);
      console.log("Before sort: " + JSON.stringify(jsonBefore));

      // Apply a sort
      data.acc.sort(sort_by('mascot', true));

      // Show the new state of the sorted data
      jsonAfter = JSON.stringify(data);
      console.log("After sort (by mascot): " + jsonAfter);

// ===============================================
// User Facing Sort Mechanism!
// ===============================================

      // DEFAULT: Sort by school, display on load
      data.acc.sort(sort_by('school', true));
      html = Mustache.to_html(template, data);
      document.getElementById('live').innerHTML = html;

      // Click event: any .sorter link
      $('.sorter').click(function(){
        $('.sorter').removeClass('active');
        $(this).addClass('active');
        return false;
      });

      // Click event: Sort by school
      $('#liveSchool').click(function(){
        data.acc.sort(sort_by('school', true));
        html = Mustache.to_html(template, data);
        document.getElementById('live').innerHTML = html;
      });

      // Click event: Sort by mascot
      $('#liveMascot').click(function(){
        data.acc.sort(sort_by('mascot', true));
        html = Mustache.to_html(template, data);
        document.getElementById('live').innerHTML = html;
      });

      // Click event: Sort by cost
      $('#liveCost').click(function(){
        data.acc.sort(sort_by('cost', false, parseInt));
        html = Mustache.to_html(template, data);
        document.getElementById('live').innerHTML = html;
      });