/* 
  Once you complete a problem, refresh ./SpecRunner.html in your browser and check to see if the problem's test(s) are passing.
  Passed tests will be indicated by a green circle.
  Failed tests will be indicated by a red X.

  You can refresh the page at any time to re-run all the tests.
*/

////////// PROBLEM 1 //////////

// Do not edit the code below.
var name = 'Tyler';
// Do not edit the code above.

/*
  Create a function called isTyler that accepts name as it's only parameter.
  If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.
*/

//Code Here
function isTyler(name){
  if (name==="Tyler"){
    return true;
  } else {
    return false;
  }
}


////////// PROBLEM 2 //////////

/*
  Create a function called getName that uses prompt() to prompt the user for their name and then returns the given name.
*/

//Code Here
function getName(){
  return prompt("Please enter your name");
} 


////////// PROBLEM 3 //////////

/*
  Create a function called welcome that uses your getName function you created in the previous problem to get the user's name.
  Then alert "Welcome, " plus the given user's name.

  Example: "Welcome, Bob Joe"
*/

//Code Here
function welcome(){
  alert("Welcome, " + getName());
}


////////// PROBLEM 4 //////////

/*
  What is the difference between arguments and parameters?
*/

//Answer Here
//Parameters are simply placeholders within the function.
//Arguments are the actual values which are inserted into the function when the function is called.


////////// PROBLEM 5 //////////

/*
  What are all the falsy values in JavaScript and how do you check if something is falsy?
*/

//Answer Here
//Falsy values in JavaScript:
//1) false.
//2) 0
//3) '' or ""
//4) null
//5) undefined
//6) NaN
//Here is how you check if something is falsy:
//You can check it by running it through an if statement like so:
// if (somethingBeingChecked) {
//   return true;
// } else {
//   return false;
// }

////////// PROBLEM 6 //////////

/*
  Create a function called myName that returns your name
*/

//Code Here
function myName(){
  return "Benjamin";
}


/*
  Now save the function definition of myName into a new variable called newMyName
*/

//Code Here
var newMyName = function(){};


/*
  Now alert the result of invoking newMyName
*/

// Code Here
alert(newMyName());


////////// PROBLEM 7 //////////

/*
  Create a function called outerFn which returns an anonymous function which returns your name.
*/

//Code Here
function outerFn(){
  return function() {
    return "Benjamin";
  }
}


/*
  Now save the result of invoking outerFn into a variable called innerFn.
*/

//Code Here
var innerFn = outerFn();


/* 
  Now invoke innerFn.
*/

// Code Here
innerFn();