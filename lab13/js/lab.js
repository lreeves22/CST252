/*
 * Author: Lauren Reeves
 * Created: 17 October
 * License: Public Domain
 */

 // Return Gryffindor, Ravenclaw, Slytherin, and Hufflepuff
// depending on length mod 4

housesArray = [
    {
        title: "Grey",
        text: "Attributes: Powerful, Mysterious, Provocative. Power and mystery are dominant factors that characterize people, like you, whose personality color is Grey."
    },
    {
        title: "Orange",
        text: "Attributes: Optimistic, Friendly, Perceptive. You’re whimsical and value zaniness in others. You’re also bubbly, in an infectious, happy, joyful way. You see the best in people, despite what others may say about them. And you’re a forgiver—to a fault."
    },
    {
        title: "Green",
        text: "Attributes: Peaceful, Serene, Accommodating. As a Green, you are known for your chill vibes, and your body is rarely consumed with anxiety. Chores, work, and even exercise is easier when you are well rested and relaxed."
    },
    {
        title: "Crimson",
        text: "Attributes: Adventurous, Bold, Direct.Bold, assertive, domineering, craving excitement—it’s how you live your life. You aren’t afraid to tell people exactly what you think, and you certainly don’t hold back in any aspect of your life."
    },
    {
        title: "Purple",
        text: "Attributes: Creative, Expressive, Emotive. As a Purple, you are a creative thinker: thoughtful, reflective, maybe even a little quirky. Convention does not influence you."
    },
    {
        title: "Blue",
        text: "Attributes: Dependable, Practical, Directive. Blues tend to be rule-following, dependable, long-enduring, and tenacious. You make sacrifices in order to rise up the ranks in the world. You put in the extra hours in the office. You always fill out your taxes and pay your bills on time."
    },

]

credit = '<div class="credits">The color of your personality descriptions <a href=https://thecolorofmypersonality.com/">myColor</a></div>';





function sortingHatLength(str) {
  len = str.length;
  mod = len % 4;
  if (mod == 0) {
    return "Gryffindor"
  }
  else if (mod == 1) {
    return "Ravenclaw"
  }
  else if (mod == 2) {
    return "Slytherin"
  }
  else if (mod == 3) {
    return "Hufflepuff"
  }
}

// take a string and return a hashed checksum of the string
// from https://stackoverflow.com/questions/26057572/
function checksum(s) {
  var hash = 0, strlen = s.length, i, c;
  if ( strlen === 0 ) {
    return hash;
  }
  for ( i = 0; i < strlen; i++ ) {
    c = s.charCodeAt( i );
    hash = ((hash << 5) - hash) + c;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
};

// Given a name, hash the string, and
// return Gryffindor, Ravenclaw, Slytherin, and Hufflepuff
function sortingHatHash(str) {
  checksumValue = checksum(str);
  mod = Math.abs(checksumValue) % housesArray.length;
  return housesArray[mod];      // returns an object from the array
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
  // get value from input field
  var name = document.getElementById("input").value;
  // use name to get house from SortingHat function
  var houseObj = sortingHatHash(name);
  // output to output div (adding some text and HTML around the results)
  newText = "<h3> The color that matches your personality is: " + houseObj.title + "</h3>" +
          "<p>" + houseObj.text + "</p>" + credit;
  document.getElementById("output").innerHTML = newText;
})
