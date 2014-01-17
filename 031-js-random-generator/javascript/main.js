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

function getRandomName(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomName = arr[randomIndex];
  return randomName;  
}

$(document).ready(function(){

  $('li.hero').each(function(i,el){
    $(this).text(getRandomName(heroes));
  });

  $('li.villain').each(function(i,el){
    $(this).text(getRandomName(villains));
  });

});
