/**
 * Summary. (use period)
 *
 * Description. Lab 7 -Functions
 * @link   URL
 * @file   This files defines the MyClass class.
 * @author Lauren Reeves.
 * @since  x.x.x
 */

//sortUsername - a funtion that takes user input and sorts the letters
// of their name
function sortUserName() {
  var userName = window.prompt ("Hi. Please tell me your name so I can fix it.");
  console.log("userName =", userName);
  // split string to array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  // sort the nameArray
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  // join array back to a string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  // Note that I could have done the above lines as a single line:
  // userName.toLower().split("").sort().join("")
  return nameSorted;

}

// output
document.writeln("Oh hey, I've fixed your name: ",
        sortUserName(), "</br>");
