/*
* Author: Lauren Reeves
* Created: 22 September
* License: Public Domain
*/

// Define Variables
myTransport= ["Subaru", "rides from friends"];

myMainRide = {
  make : "Subaru"
  model : "Forester"
  color : "Blue"
  year: 2012,
  age: function (){
    return 2021 - age;

  }
  // output
document.writeln("Kinds of transportion I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
document.writeln("The age of my ", myMainRide.model, " is ", myMainRide.age(), " years.");
}
