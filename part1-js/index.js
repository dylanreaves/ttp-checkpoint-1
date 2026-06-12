// ============================================================
// PART 1 — JavaScript Basics
//
// How to run your code:
//   Open the index.html file in this folder with Live Server.
//   Your console.log output will appear in the browser's DevTools console.
//   Open DevTools: right-click the page → Inspect → Console tab
//   (or Cmd+Option+J on Mac / Ctrl+Shift+J on Windows)
//
//   Every time you save index.js, Live Server reloads the page
//   and re-runs your code automatically.
//
//   IMPORTANT — switching parts:
//   Each part has its own index.html. When you move to Part 2 or Part 3,
//   stop Live Server and restart it pointing at that part's folder.
//   Running the wrong HTML file means your changes won't show up.
//
// Instructions:
//   - Write your code directly below each prompt
//   - Every task that produces a value must use console.log to show it
//       ex: console.log(yourAnswer)
//   - For EXPLAIN prompts, write your answer as a comment directly below
//       ex: // answer: write your answer here...
// ============================================================


// ------------------------------------------------------------
// SECTION A — Variables & Math
// ------------------------------------------------------------
console.log("[ SECTION A — Variables & Math ]")


// A1.
// Declare a variable using const and assign it the number 100.
// Declare a variable using let and assign it the number 45.
// Log both.
const v1 = 100;
let v2 = 45;
console.log("Number 1:",v1, "Number 2:",v2);

// A2.
// Using only those two variables, write a single expression that adds them,
// subtracts 20, multiplies by 2, and divides by 5.
// Log the result.
let result = ((((v1 + v2) - 20) * 2) / 5);
console.log(result);

// A3.
// Reassign your let variable to a different number. Log it.
// Now try to reassign your const variable. What happens?
// 
// EXPLAIN: What is the difference between let and const?
//          Write your answer as a comment below.
//
//          answer: the const keywork makes a variable unable to be changed but 
//          let variables can be changed at anytime.
// v2 = result;
// v1 = 0;


// A4.
// Using the % operator, write an expression that tells you
// whether the number 47 is even or odd.
// Log the result and a message that says "even" or "odd".
//
// EXPLAIN: What does the % operator return?
//          Why is it useful for checking even/odd?
//
//          answer: The % operator returns the remainder after dividing by its second operand.
//          It's useful to check for even/odd because there are propreties to even and odd numbers that
//          you can potentially use in your code.

let even_or_odd = (47 % 2 == 0) ? "Even" : "Odd"
console.log(even_or_odd)


// ------------------------------------------------------------
// SECTION B — Strings (reference to string methods: https://www.w3schools.com/jsref/jsref_obj_string.asp)
// ------------------------------------------------------------
console.log("\n[ SECTION B — Strings ]")


// The following string is provided for this section. You may use methods or compute manually.
const rawInput = "   JavaScript is AWESOME   "

// B1.
// Log the string with all leading and trailing spaces removed (extra spaces in front and end of the text).
console.log(rawInput.trim())

// B2.
// Log the string converted to all lowercase.
console.log(rawInput.toLowerCase())

// B3.
// Log the number of characters in rawInput (including spaces).
console.log(rawInput.length)

// B4.
// Log whether rawInput contains the word "awesome" (lowercase).
// It should return true.
console.log(rawInput.toLowerCase().includes("awesome"))

// B5.
// Log the first 10 characters of rawInput.
console.log(rawInput.substring(0, 10))

// B6.
// Split rawInput (after trimming it) into an array of individual words.
// Log the resulting array.
//
// EXPLAIN: What does .split() do? What argument did you pass it and why?
//
//        answer: .split() returns an array of substrings i.e. characters. When using with no arguments
//        it will return an array with a single element (the original string). When using "" as an argument
//        it will return the output we want an array of every character in the string that works because essentially
//        if we have the string 'hello' between characters 'h' and 'e' is an empty string so it can be seperated.
console.log(rawInput.trim().split(""))

// ------------------------------------------------------------
// SECTION C — Arrays (reference to array methods: https://www.w3schools.com/jsref/jsref_obj_array.asp)
//
// Each task tells you exactly what to use — a loop, a method, or a property.
// Use what is specified. Do not substitute one for another.
// ------------------------------------------------------------
console.log("\n[ SECTION C — Arrays ]")


// The following array is provided for this section.
const scores = [88, 72, 95, 60, 84, 100, 73, 91]

// C1.
// Log the first score. Log the last score.
// Do not hardcode the index for the last one.
console.log("First Score:", scores[0], "Last Score:", scores[scores.length-1])


// C2.
// Log the total number of scores we see in the array.
console.log(scores.length)

// C3.
// Use a method to mutate and add the number 78 to the end of the array.
// Log the updated array.
scores.push(78)
console.log(scores)


// C4.
// Use a method to log the index of the score 95.
// Log the index.
console.log("Index of 95:", scores.indexOf(95))


// C5.
// Use a method to log whether the array includes the score 50.
// Log the boolean value.
let x = 50
console.log("Does contain " + x +":", scores.includes(x))


// C6.
// Use a for loop to log each score on its own line.
// Do not modify the original scores array.
for (let i = 0; i < scores.length; i++) {
  console.log(scores[i])
}

// C7.
// Use .forEach() to log each score on its own line.
// Do not modify the original scores array.
//
// EXPLAIN: What is the difference between a for loop and forEach?
//          Is one better than the other?
//          The forEach differs from a for loop since it uses a callback as an argument. 
//          Both functions still loop over the entire array anyways so its not like one is strictly better than the other.
//          However using forEach you can't end it early as it will always have to loop through entirely 
//          Which gives me less control over what I plan to do when only using for each compared to a simple for loop.
scores.forEach((value, index) => console.log(value))


// C8.
// Use .filter() to create a new array containing only the scores above 80.
// Log the new result array.
// Do not modify the original scores array.
let filteredScores = scores.filter((score) => score > 80)
console.log(filteredScores)

// C9.
// Use .map() to create a new array where every score is multiplied by 2.
// Log the new result array.
// Do not modify the original scores array.

let mappedScores = scores.map((score) => score*=2)
console.log(mappedScores)

// EXPLAIN: What does .map() return? What does .filter() return?
//          How are they different?
//
//          answer: .filter() returns a shallow copy which means changes 
//          made to the filtered array can also be applied to the original.
//
//          .map() however returns a deep copy which is a completely new array that will not be
//          replicated to the original.




// ------------------------------------------------------------
// SECTION D — Objects (reference to object methods: https://www.w3schools.com/jsref/jsref_obj_object.asp)
// ------------------------------------------------------------
console.log("\n[ SECTION D — Objects ]")


// The following object is provided for this section.
const student = {
  name: "Brunson",
  age: 29,
  city: "New York",
  enrolled: true
}

// D1.
// Log the value of name using dot notation.
// Log the value of city using bracket notation.
console.log(student.name)
console.log(student['city'])


// D2.
// Add a new key called grade and set it to "B+".
// Log the updated object.
student.grade = 'B+'
console.log(student)

// D3.
// Use a method to log all of the keys in the object.
console.log(Object.keys(student))

// D4.
// Use a method to log all of the values in the object.
console.log(Object.values(student))

// D5.
// Using a for...in loop, log each key-value pair in this exact format:
//   name: Jane
//   age: 21
//   (etc.)
for (const key in student) {
  console.log(key + ":", student[key])
}

// D6.
// EXPLAIN: What is the difference between dot notation and bracket notation?
//          Give an example of when you would need to use bracket notation
//          instead of dot notation.
//
//          answer: One main difference between dot and bracket notation is that dot notation only works
//          when the key is a valid identifier. That means key names must match the same 
//          common rules as variables i.e (cannot start with a number, have a space and more)
//
//          With bracket notation these rules do not apply you can add keys like:
//          student["date of birth"] or student["1st"] and they will still be valid
//          This also allows keys to have names that can be dynamically created which can be useful.

// ------------------------------------------------------------
// SECTION E — Arrays of Objects
// ------------------------------------------------------------
console.log("\n[ SECTION E — Arrays of Objects ]")


// The following array is provided for this section.
const roster = [
  { name: "Alex",  grade: 92, present: true  },
  { name: "Jamie", grade: 74, present: false },
  { name: "Jane",grade: 88, present: true  },
  { name: "Riley", grade: 61, present: true  },
  { name: "Casey", grade: 95, present: false }
]

// E1.
// Log the name of the third student.
console.log("Name of third student:", roster[2].name)

// E2.
// Using forEach, log the name of every student who is present.
console.log("Present Students:")
roster.forEach((studentObj, index) => {
  if (studentObj.present) {
    console.log(studentObj.name)
  }
}) 


// E3.
// Create a new array containing only the students who passed (grade >= 70).
// Log each passing student's name and grade.
let passingStudents = roster
.filter((studentObj) => studentObj.grade >= 70)
.map((studentObj) => ({...studentObj}))

passingStudents.forEach(student => {
  console.log("Name:", student.name)
  console.log("Grade: ", student.grade)
});

// E4.
// Create a new array of just the names of all students (no other data).
// Log the result array.
let namesOfStudents = roster
.map((studentObj) => ({...studentObj}.name))
console.log(namesOfStudents)

// E5.
// EXPLAIN: Why would you store objects inside an array?
//          What problem does that structure solve compared to
//          storing everything in separate variables?
//
//          answer: Because there may be situtations where there are too many objects to store in unique seperate variables
//          so storing them in an array makes it easy to iterate over and traverse.


// ------------------------------------------------------------
// SECTION F — Functions
//
// For each task, write the function so that the calls below it produce the shown output.
// ------------------------------------------------------------
console.log("\n[ SECTION F — Functions ]")


// F1.
// Write a function called greet that takes a name as an argument
// and returns a greeting string.
//
function greet(name) {
  return "Hello, " + name + "!"
}

console.log(greet("Alex"))   // → "Hello, Alex!"
console.log(greet("Mike"))   // → "Hello, Mike!"


// F2.
// Write a function called square that takes a number and returns its square.
//

function square(num) {
  return (num * num)
}
console.log(square(4))   // → 16
console.log(square(9))   // → 81
//
// EXPLAIN: What does the return keyword do?
//          What does a function return if you forget to write return?
//
//          answer: The return keyword ends the function execution and can be made to give back a value.
//          If a function does not have a return it returns 'undefined'


// F3.
// Write a function called isEven that takes a number and returns
// true if it is even and false if it is odd.
//
function isEven(num) {
  return (num % 2 == 0) ? true : false
}

console.log(isEven(4))   // → true
console.log(isEven(7))   // → false
console.log(isEven(0))   // → true


// F4.
// Write a function called sum that takes an array of numbers
// and returns the total of all the numbers added together.
// Use a loop inside — do not use a built-in method.
//

function sum(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    let num = array[i]
    total += num
  }
  return total
}
console.log(sum([1, 2, 3, 4, 5]))   // → 15
console.log(sum([10, 20, 30]))       // → 60
console.log(sum([]))                 // → 0


// F5.
// Write a function called myForEach that takes an array and a callback function as arguments.
// It should call the callback on every element in the array.
// It should not return anything.
// Do not use the native .forEach() inside your function — use a for loop.
//
function myForEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i])
  }
}

myForEach([1, 2, 3], function(n) {
  console.log(n)
})
// → 1
// → 2
// → 3
//
// EXPLAIN: What is a callback function?
//          In the example above, what plays the role of the callback?
//
//          answer: A callback function is a function that has been passed into another function as an argument.
//          In the example above the parameter named 'callback' is the function thats being passed.
//          When called the function that is sent is a function that logs the value of 'n'


// F6.
// Write a function called myMap that takes an array and a callback function as arguments.
// It should return a NEW array where each element is the result of
// calling the callback on the original element.
// Do not use the native .map() inside your function — use a for loop.
//

function myMap(array, callback) {
  let newArr = []
  for (let i = 0; i < array.length; i++) {
    let item = array[i]
    let new_item = callback(item)
    newArr.push(new_item)
  }
  return newArr
}

console.log(myMap([1, 2, 3], (n) => n * 2))    // → [2, 4, 6]
console.log(myMap([1, 2, 3], (n) => n + 10))   // → [11, 12, 13]


// F7.
// Write a function called myFilter that takes an array and a callback function as arguments.
// It should return a NEW array containing only the elements for which
// the callback returns true.
// Do not use the native .filter() inside your function — use a for loop.
//

function myFilter(array, callback) {
  let newArr = []
  for (let i = 0; i < array.length; i++) {
    let item = array[i]
    if (callback(item)) {
      newArr.push(item)
    }
  }
  return newArr
}

console.log(myFilter([1, 2, 3, 4, 5], n => n > 3))          // → [4, 5]
console.log(myFilter([10, 25, 30, 45], n => n % 2 === 0))   // → [10, 30]
//
// EXPLAIN: What do myMap and myFilter have in common?
//          What is the key difference between what they return?
//          Why do neither of them change the original array?
//
//          answer:
//          1. Both loop through the entire array
//          2. myMap() returns something applied by the callback. While myFilter() checks to see if an original value from the array should be pushed to the new one.
//          3. Because we are creating a new array and returning it
//
