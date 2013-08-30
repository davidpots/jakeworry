    $.getJSON('data.json', function(json) {

      // ===============================================
      // Count the # of items in the JSON
      // ===============================================

            var size = 0;
            $.each(json.users, function(i) {
              size++;
            });

      // ===============================================
      // Output all items in the JSON
      // ===============================================

            var output="<ul>";
            for (var i in json.users) {
                output+="<li>" + json.users[i].firstName + " " + json.users[i].lastName + " – " + json.users[i].joined.month+"</li>";
            }
            output+="</ul>";

            document.getElementById("numObjects").innerHTML=size;
            document.getElementById("placeholder").innerHTML=output;

      // ===============================================
      // Randomly select + display one of the users
      // ===============================================

            var randEntry = Math.floor(Math.random()*size+1);
            var randomUserName = json.users[randEntry-1].firstName + " " + json.users[randEntry-1].lastName;

            $('#user_random').html(randEntry).html(randEntry + " (" + randomUserName+ ")" );

      // ===============================================
      // Fade in the content, so it is smooth like butter
      // ===============================================

            $('.dynamic').fadeIn(400);

    });
