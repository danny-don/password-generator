// ============================================================
// DOM Elements
// ============================================================

const output = document.getElementById("output");
const error = document.getElementById("error");
const copy = document.getElementById("copyToClipboard");
const includeLowerCase = document.getElementById("includeLowerCase");
const includeSymbols = document.getElementById("includeSymbolsSwitch");
const includeNumbers = document.getElementById("includeNumbers");
const includeUpperCase = document.getElementById("includeUpperCase");

// ============================================================
// Arrays
// ============================================================

// Arrays used for generating the password

const alphabetLowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
const alphabetUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const numbers = "1234567890".split("");
const specialCharacters = '¬!"£$%^&*()-_=+#~[]{}@:;,.|/'.split("");

// ============================================================
// Check Password Input
// ============================================================

// Checks the text input for errors such as a user entering letters instead of numbers. Displays and hides error messages

function checkPasswordInput() {
  let passwordLength = document.getElementById("passwordLength").value;

  if (passwordLength === "") {
    output.innerHTML = "";
    output.classList.add("hidden");
    copy.classList.add("hidden");
    error.classList.remove("hidden");
    error.innerHTML = "Please enter a number";
  } else if (passwordLength > 400) {
    output.innerHTML = "";
    output.classList.add("hidden");
    copy.classList.add("hidden");
    error.classList.remove("hidden");
    error.innerHTML = "Password must be less than 401 characters";
  } else if (passwordLength < 6) {
    output.innerHTML = "";
    output.classList.add("hidden");
    copy.classList.add("hidden");
    error.classList.remove("hidden");
    error.innerHTML = "Password must be at least 6 characters";
  } else if (
    alphabetLowerCase.some((letter) => passwordLength.includes(letter))
  ) {
    output.innerHTML = "";
    output.classList.add("hidden");
    copy.classList.add("hidden");
    error.classList.remove("hidden");
    error.innerHTML = "Password length cannot contain letters";
  } else if (
    alphabetUpperCase.some((letter) => passwordLength.includes(letter))
  ) {
    output.innerHTML = "";
    output.classList.add("hidden");
    copy.classList.add("hidden");
    error.classList.remove("hidden");
    error.innerHTML = "Password length cannot contain letters";
  } else if (
    specialCharacters.some((character) => passwordLength.includes(character))
  ) {
    output.innerHTML = "";
    output.classList.add("hidden");
    copy.classList.add("hidden");
    error.classList.remove("hidden");
    error.innerHTML = "Password length cannot contain special characters";
  } else if (
    includeLowerCase.checked === false &&
    includeSymbols.checked === false &&
    includeNumbers.checked === false &&
    includeUpperCase.checked === false
  ) {
    output.innerHTML = "";
    output.classList.add("hidden");
    copy.classList.add("hidden");
    error.classList.remove("hidden");
    error.innerHTML = "Please select at least one option from above";
  } else {
    error.innerHTML = "";
    error.classList.add("hidden");
    output.classList.remove("hidden");
    copy.classList.remove("hidden");
    copy.innerText = "Copy To Clipboard";
  }
}

// ============================================================
// Generate All Passwords
// ============================================================

// Generates a password depending on which checkboxes are checked

function generateAllPasswords() {
  let finalArray = [];

  if (includeLowerCase.checked === true) {
    finalArray = finalArray.concat(alphabetLowerCase);
  }

  if (includeSymbols.checked === true) {
    finalArray = finalArray.concat(specialCharacters);
  }

  if (includeNumbers.checked === true) {
    finalArray = finalArray.concat(numbers);
  }

  if (includeUpperCase.checked === true) {
    finalArray = finalArray.concat(alphabetUpperCase);
  }

  checkPasswordInput();
  getCharacters(finalArray);
}

function getCharacters(finalArray) {
  // console.log(finalArray);
  let passwordLength = document.getElementById("passwordLength").value;
  let hereIsYourPassword = "";
  for (i = 0; i < passwordLength; i++) {
    // This creates a random number from 0 to whatever the highest index in the array is. We use this to randomly pick a character from the array
    let randomNumber = Math.floor(Math.random() * finalArray.length);
    hereIsYourPassword += finalArray[randomNumber];
  }
  output.innerHTML = hereIsYourPassword;
}

// ============================================================
// Copy to clipboard
// ============================================================

// Copies the generated password to the clipboard

// from stackoverflow:
function copyPassword() {
  var copyText = output.textContent;
  copyToClipBoard(copyText);
  copy.innerText = "Copied";
}

const copyToClipBoard = (str) => {
  const el = document.createElement("textarea");
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
};
