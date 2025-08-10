// --- Part 1: Variable Declarations and Conditionals ---

// Variables
let userName = "Alice";
let userAge = 25;

// Conditional example
if (userAge >= 18) {
  console.log(userName + " is an adult.");
} else {
  console.log(userName + " is a minor.");
}

// --- Part 2: Custom Functions ---

// Function 1: Greet user
function greetUser(name) {
  return `Hello, ${name}! Welcome to the site.`;
}

// Function 2: Check if a number is even
function isEven(number) {
  return number % 2 === 0;
}

// --- Part 3: Loop Examples ---

// Loop 1: For loop to log numbers 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log("Number:", i);
}

// Loop 2: While loop to count down from 3 to 1
let countdown = 3;
while (countdown > 0) {
  console.log("Countdown:", countdown);
  countdown--;
}

// --- Part 4: DOM Interactions ---

// 1. Update message paragraph text
const messageEl = document.getElementById("message");
messageEl.textContent = greetUser(userName);

// 2. Change color of the main title when button clicked
const changeColorBtn = document.getElementById("changeColorBtn");
const mainTitle = document.getElementById("main-title");

changeColorBtn.addEventListener("click", () => {
  mainTitle.style.color = mainTitle.style.color === "darkblue" ? "darkred" : "darkblue";
});

// 3. Append list items showing even or odd numbers when button clicked
const runFunctionsBtn = document.getElementById("runFunctionsBtn");
const listEl = document.getElementById("list");

runFunctionsBtn.addEventListener("click", () => {
  listEl.innerHTML = ""; // Clear previous list items

  for (let num = 1; num <= 10; num++) {
    const li = document.createElement("li");
    if (isEven(num)) {
      li.textContent = `${num} is even`;
    } else {
      li.textContent = `${num} is odd`;
    }
    listEl.appendChild(li);
  }
});
