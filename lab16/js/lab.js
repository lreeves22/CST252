/**
 * Author:   Lauren Reeves
 * Created:  10/27/2021
 *
 **/
 function Vehicle (passedMake, passedModel, passedYear, passedColor) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.extras = extras;
  this.name = name;
}

 // add a method talk () that brings up an appropriate alert box""____ says "
 this.info = function(){
   var str = "It's a " + color + " " + year + " " + make + " " + model + " with "
   + extras + " called " + name + " . "

 }


 // create dog, cat;
 var ripstik = new Vehicle("Razor", "Ripstik", "2010", "green");
 var car = new Vehicle ("Subaru", "Forester", "2011", "blue");
