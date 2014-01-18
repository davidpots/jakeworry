// Name = unique
// Description 
        
        // category (restaurant, spa, sports, auto)
        // description

var images = { "restaurant": [
                  "http://a0.lscdn.net/imgs/37d1171b-2b67-4037-9075-bc6e9b67e123/460_q60.jpg",
                  "http://a0.lscdn.net/imgs/7c5914a1-cca2-466e-8925-3d191a73a455/460_q60.jpg",
                  "http://a0.lscdn.net/imgs/e1940d0b-f08a-4b24-89ed-79a07c9f8b00/460_q60.jpg",
                  "http://a0.lscdn.net/imgs/6150fff9-f520-4d17-a24d-a77c9223f520/460_q60.jpg",
                  "http://a0.lscdn.net/imgs/6dedbbfe-34d0-4acf-bb53-96fdfa754aa3/460_q60.jpg",
                  "http://a0.lscdn.net/imgs/5f23fcc2-3cd6-4bb9-8aa8-647df496a181/460_q60.jpg",
                  "http://a0.lscdn.net/imgs/9f7b53d5-d321-496a-96bf-d89494c0275a/460_q60.jpg",
                  "http://a0.lscdn.net/imgs/340c18fd-25a0-4104-894c-23c9ea355cc4/460_q60.jpg",
                  "http://a0.lscdn.net/imgs/1038ddc2-2fb7-4c51-8982-b88d0c767a58/460_q60.jpg",
                  "http://a0.lscdn.net/imgs/c9b1e43f-304d-480d-bf36-4a95c5df0c75/460_q60.jpg",
                  "http://a0.lscdn.net/imgs/c478cf7c-d749-42c0-930c-ce15013c0225/460_q60.jpg",
                  "http://a0.lscdn.net/imgs/22e05ca9-055c-442f-88e5-41b2b16fffd0/460_q60.jpg",
                  "http://a0.lscdn.net/imgs/0ca9d64e-bc4e-407f-9532-7b53b2d56f24/460_q60.jpg",
                  "http://a0.lscdn.net/imgs/34b9b363-6c78-4df0-9961-660a49b90fe1/460_q60.jpg",
                  "http://a0.lscdn.net/imgs/dc2a6850-4467-4f41-b8bd-4e2a9f0de3d4/460_q60.jpg",
                  "http://a0.lscdn.net/imgs/73f273fc-6185-4536-adc5-2e48b64ac4c7/460_q60.jpg",
                  "http://a0.lscdn.net/imgs/a184133b-c107-41b5-9fee-7b7cb4038514/460_q60.jpg",
                  "http://a0.lscdn.net/imgs/52507687-1f5a-437d-8cc7-f6f1f074ec0a/460_q60.jpg",
                  "http://a0.lscdn.net/imgs/36bb37e3-1b97-47c9-8e9f-ca51dd063660/460_q60.jpg",
                  "http://a0.lscdn.net/imgs/c83d3af6-25ea-4846-aa1d-ec0013ed6c56/460_q60.jpg" 
             ]}

var deals = { "restaurant": [
              { price: "20",
                desc: "Cafe Feed and Drinks for Two"
              },
              { price: "10",
                desc: "$20 to Spend on Food and Drink"
              },
              { price: "30",
                desc: "Two-Course 10oz Rump Steak Meal for Two"
              },
              { price: "35",
                desc: "Three-Course Seafood Dining Experience for Two"
              },
              { price: "25",
                desc: "Three-Course Prix-Fixe Sushi Dinner for Two"
              },
              { price: "20",
                desc: "Three-Course Pizza Dinner for Two with Wine"
              },
              { price: "15",
                desc: "Saturday Brunch for Two"
              },
              { price: "10",
                desc: "$20 to Spend on Food and Drink"
              },
              { price: "20",
                desc: "$40 to Spend on Food and Drink"
              },
              { price: "40",
                desc: "Lobster-Bake Dinner for Two"
              },
              { price: "20",
                desc: "$35 to Spend on Food and Drink at Dinner"
              },
              { price: "10",
                desc: "$20 to Spend on Food and Drink"
              },
              { price: "15",
                desc: "$30 to Spend on Food and Drink"
              },
              { price: "20",
                desc: "$20 or $40 to Spend on Asian Street Food"
              },
              { price: "10",
                desc: "Dinner, Brunch, or Breakfast"
              },
              { price: "20",
                desc: "$40 to Spend on Food and Drink"
              },
              { price: "35",
                desc: "Dinner for Two or Four with a Bottle of Wine"
              },
              { price: "10",
                desc: "$20 or $30 to Spend on Sushi"
              },
              { price: "15",
                desc: "$25 to Spend on Tapas"
              },
              { price: "10",
                desc: "$20 to Spend on Fresh Fare"
              }
            ]}





var heroes = [  "Superman",
                "Thor",
                "Batman",
                "Spiderman",
                "Wolverine",
                "Professor X",
                "Rogue",
                "Daredevil",
                "Iron Man",
                "The Hulk",
                "Hawkeye",
                "Captain America",
                "The Green Lantern",
                "Cyclops",
                "Beast",
                "Black Widow",
                "The Flash"];

var villains = [  "The Joker",
                "Bane",
                "The Penguin",
                "Poison Ivy",
                "The Scarecrow",
                "Magneto",
                "Sabertooth",
                "The Mandarin",
                "Loki",
                "The Hobgoblin",
                "The Green Goblin",
                "Doc Oc",
                "Mr. Freeze"];

var poo;
function getRandom(arr,isUnique,child) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomName = arr[randomIndex];
  if (isUnique == true) {
    // removes the random selection so it doesn't show up again
    arr.splice(randomIndex, 1);
  }
  if (child) {
    return randomName[child];
  }
  return randomName;  
}

$(document).ready(function(){

  $('.tile.random').each(function(i,el){
    $(this).find('.image').attr('src',getRandom(images.restaurant,true));
    $(this).find('h2.primary').text(getRandom(villains));
    $(this).find('p.secondary').text(getRandom(deals.restaurant,null,"desc"));
    $(this).find('p.price').append(getRandom(deals.restaurant,false,"price"));
  });

  $('li.hero').each(function(i,el){
    $(this).text(getRandom(heroes));
  });

  $('li.villain').each(function(i,el){
    $(this).text(getRandom(villains,true));
  });

});