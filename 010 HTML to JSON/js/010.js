$('#run').click( function() { 
  var table = $('#example-table').tableToJSON();
  document.getElementById('target').innerHTML = JSON.stringify(table);
});