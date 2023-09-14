// Insert comment
var hours = 0, minutes = 0, seconds = 0;

setInterval(function() {
  seconds++; // increase seconds by 1 once per settimeout interval, which is every one second

  if (seconds > 59) {
    minutes++; // increase minutes by 1 when seconds hits 59
    seconds = 0; // reset seconds to 0 so it doesnt exceed 60
  }

  if (minutes > 59) {
    hours++; // increase hours by 1 when minutes hits 59
    minutes = 0; // reset minutes to 0 so it doesnt exceed 59

    if (hours > 23) {
      hours = 0; // reset hours to 0 when it hits 23 so it doesnt exceed 23
    }
  }

  h = hours, m = minutes, s = seconds; // change variable from int to string

  if (h < 10) {
    h = "0" + h; //if hrs are less than 10, add a 0 to the front of the number so that its formatted correctly
  }
  if (m < 10) {
    m = "0" + m; //if mins are less than 10, add a 0 to the front of the number so that its formatted correctly
  }
  if (s < 10) {
    s = "0" + s; //if secs are less than 10, add a 0 to the front of the number so that its formatted correctly
  }

  var time = h + ":" + m + ":" + s; // Insert comment
  document.getElementById("ClockDisplay").innerText = time; // display the h, m , s values with the correct formatting

}, 1000);

/**
 * Initialise to system date/time.
 * (Feel free to ignore!)
 */
setTimeout(function fn() {
  var date = new Date();
  hours = date.getHours();
  minutes = date.getMinutes();
  seconds = date.getSeconds();
}, 1000);

//task 1
let age = 22
console.log(age);

//task 2
if(age < 17){
  console.log("you cannot legally drink alcohol")
}else{
  console.log("you can legally drink alcohol")
}

//task 3
// see comments

//task 4
let birthyear = 0;
birthyear = window.prompt("What is your birthyear");
let currentage = getAge(birthyear);
console.log(currentage + " years old");

function getAge(birthyear){
  let year = 2023;
  var age = year - birthyear;
  return age;
}

//task 5

