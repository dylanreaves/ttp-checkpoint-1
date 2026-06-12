// ============================================================
// PART 3 — DOM Manipulation
//
// Instructions:
//   - Write all your JavaScript here
//   - Open index.html in Live Server to test
//   - Do not edit index.html
//   - Answer EXPLAIN prompts as comments directly below each one
// ============================================================


// ------------------------------------------------------------
// SECTION A — Selecting Elements
// ------------------------------------------------------------
console.log("[ SECTION A — Selecting Elements ]")

// A1.
// Use getElementById to select the following elements.
// Look at index.html to find each element's id.
// Store each in its own variable and log all of them.
//
//   the h1
//   the p that shows the page status
//   the unordered list
const mainHeading = document.getElementById("main-heading")
const pageStatus = document.getElementById("subtitle")
const listSection = document.getElementById("list-section")

console.log(mainHeading)
console.log(pageStatus)
console.log(listSection)

// A2.
// Use querySelector to select the following elements.
// Store each in its own variable and log all of them.
//
//   the h2 — select it by its tag name
//   the "Toggle Highlight" button — select it by its id (look at index.html to find it)
//   a list item — select it by its class (look at index.html to find the class name)
const listHeader = document.querySelector("h2")
const highlightButton = document.querySelector("#toggle-btn")
const listItem = document.querySelector(".list-item")

console.log(listHeader)
console.log(highlightButton)
console.log(listItem)

// A3.
// Use querySelectorAll to select all elements with the class "list-item".
// Store the result in a variable and log it.
const allListItems = document.querySelectorAll(".list-item")
console.log(allListItems)

// A4.
// Use querySelectorAll to select all elements with the class "list-item".
// Loop over the result and log the text content of each one.
//
// Note: the result is a NodeList, not a plain array.
allListItems.forEach(function(currElement, currIndex){
    console.log(currElement.textContent)
})

// A5.
// EXPLAIN: What is the difference between getElementById and querySelector?
//          What does querySelectorAll return?
//          How is that different from a regular array?
//
//          answer: 
//          1. getElementById returns an element by it's unique ID while querySelector returns the First element that matches its argument.
//          2. querySelectorAll returns a NodeList which is an array-like structure but differs from a JavaScript array.
//          3. It does not have array methods like .map(), .filter() and more which is important to understand when using it in JavaScript.

// ------------------------------------------------------------
// SECTION B — Reading and Changing the DOM
// ------------------------------------------------------------
console.log("\n[ SECTION B — Reading and Changing the DOM ]")

// B1.
// Select the h1 with the id "main-heading" and log its text content.
console.log(mainHeading.textContent)

// B2.
// Select the p with the id "subtitle" and change its text to "Page loaded successfully."
// This should happen as soon as the page loads — not on a click.
pageStatus.textContent = "Page loaded successfully."
console.log(pageStatus.textContent)

// B3.
// Select the p with the id "output-text" and change its text to anything you choose.
const outputLabel = document.getElementById("output-text")
outputLabel.textContent = "No output."

// B4.
// Select the div with the id "output-box" and give it a background color of your choice.
// Do this with JavaScript — not by editing the CSS file.
const outputFrame = document.getElementById("output-box")
outputFrame.style.backgroundColor = "100, 100, 100"

// B5.
// EXPLAIN: What is textContent?
//          How is it different from innerHTML?
//          When would using innerHTML be risky?
//
//          answer:
//          1. textContent is the string of text inside an element.
//          2. It differes from innerHTML because it does not come with the HTML tags and only includes the text string. 
//          3. It would be risky because malicious users can inject harmful scripts by using it which is a security issue.


// ------------------------------------------------------------
// SECTION C — Responding to Events
// ------------------------------------------------------------
console.log("\n[ SECTION C — Responding to Events ]")

// C1.
// Add a click listener to the button with the id "change-btn".
// When clicked, change the text of the h1 with the id "main-heading" to any text you choose.
document.getElementById("change-btn").addEventListener("click", (event) => {
    console.log(event.target)
    mainHeading.textContent = "You changed the heading!"
})

// C2.
// Add a click listener to the button with the id "toggle-btn".
// When clicked, toggle the class "highlighted" on the p with the id "output-text".
// Add it if it is not there. Remove it if it is.
document.getElementById("toggle-btn").addEventListener("click", (event) => {
    //console.log(event.target)
    outputLabel.classList.toggle("highlighted")
})

// C3.
// Select the h1 with the id "main-heading" and add the class "active" to it.
// Log the element's class list to confirm the class is there.
//
// Then select one of the list items that already has the class "list-item".
// Remove that class from it.
// Log its class list to confirm the class is gone.
mainHeading.classList.add("active")
console.log(mainHeading.classList)
listItem.classList.remove("active")
console.log(listItem.classList)

// C4.
// EXPLAIN: What is an event listener?
//          Why can't you write the code outside of a function
//          and expect it to run when the button is clicked?
//
//          answer:


// C5.
// EXPLAIN: What does classList.toggle do?
//          What does classList.add do? What does classList.remove do?
//          How are they different from setting element.className directly?
//
//          answer:
//          1. classList.toggle essentially adds a classlist if it doesn't exist yet and removes it if it does.
//          2. It adds a new entry to the classlist and classlist.remove removes it from the list.
//          3. It's different because if we were to set className directly we might erase any existing classes that are still needed.
//          So it is much safer to call toggle(), add() and remove().


// ------------------------------------------------------------
// SECTION D — Creating and Adding to the DOM
// ------------------------------------------------------------
console.log("\n[ SECTION D — Creating and Adding to the DOM ]")

// D1.
// Create a new li element.
// Set its text content to any item you choose.
// Give it the class "list-item".
// Append it to the ul with the id "item-list".
const newListElement = document.createElement("li")
newListElement.textContent = "Mango"
newListElement.classList.add("list-item")
document.getElementById("item-list").appendChild(newListElement)

// D2.
// Add a click listener to the button with the id "add-btn".
// When clicked:
//   - Read the current value from the input with the id "item-input"
//   - Create a new li element and set its text to that value
//   - Give it the class "list-item"
//   - Append it to the ul with the id "item-list"
//   - Clear the input field after
document.getElementById("add-btn").addEventListener("click", (event) => {
    const itemInput = document.getElementById("item-input")
    const newItemEntry = document.createElement("li")

    newItemEntry.classList.add("list-item")
    newItemEntry.textContent = itemInput.value
    document.getElementById("item-list").appendChild(newItemEntry)

    itemInput.textContent = ""
    itemInput.value = ""

    console.log(itemInput.innerText)
    console.log(itemInput.textContent)
})

// D3.
// Select the p with the id "output-text" and remove it from the page entirely.
// After this runs, the element should no longer be visible.
outputLabel.remove()

// D4.
// EXPLAIN: What does createElement do?
//          What does appendChild do? What does remove() do?
//          When does the newly created element actually appear on the page?
//
//          answer:
//          1. createElement essentially creates a new HTML element through JavaScript.
//          2. appendChild adds an element as a new child to a parent element. remove() deletes an element entirely.
//          3. The newly created element appears when its appended to a parent one.

