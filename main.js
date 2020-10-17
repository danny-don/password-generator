// ============================================================
// DOM Elements
// ============================================================

const output = document.getElementById("output");
const error = document.getElementById("error");
const copy = document.getElementById("copy");

// ============================================================
// Arrays
// ============================================================

// Arrays used for generating the password

const alphabetLowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
const alphabetUpperCase = "ABCDEFGHIJKLMNOPQRSTUVXYZ".split("");
const numbers = "1234567890".split("");
const specialCharacters = '¬!"£$%^&*()-_=+#~[]{}@:;,.|/'.split("");
// const specialCharacters = "!£$%^&*()@".split("");

// ============================================================
// Generate A Basic Password
// ============================================================

// Generates a password that consists of only lower case letters

function generateBasicPassword() {
  let passwordLength = document.getElementById("passwordLength").value;
  let hereIsYourPassword = "";

  for (i = 0; i < passwordLength; i++) {
    // This creates a random number from 0 to whatever the highest index in the array is. We use this to randomly pick a character from the array
    let randomNumber = Math.floor(Math.random() * alphabetLowerCase.length);

    hereIsYourPassword += alphabetLowerCase[randomNumber];
  }

  output.innerHTML = hereIsYourPassword;
  return hereIsYourPassword;
}

// ============================================================
// Generate A Basic Password Including Numbers
// ============================================================

// Generates a password that consists of lower case letters and numbers

function generateBasicPasswordWithNumbers() {
  let passwordLength = document.getElementById("passwordLength").value;
  let alphabetLowerCasePlusNumbers = alphabetLowerCase.concat(numbers);

  let hereIsYourPassword = "";

  for (i = 0; i < passwordLength; i++) {
    let randomNumber = Math.floor(
      Math.random() * alphabetLowerCasePlusNumbers.length
    );

    hereIsYourPassword += alphabetLowerCasePlusNumbers[randomNumber];
  }
  output.innerHTML = hereIsYourPassword;
}

// ============================================================
// Generate A Basic Password Including Symbols
// ============================================================

// Generates a password that consists of lower case letters and symbols

function generateBasicPasswordWithSpecialSymbols() {
  let passwordLength = document.getElementById("passwordLength").value;
  let alphabetLowerCasePlusSpecialCharacters = alphabetLowerCase.concat(
    specialCharacters
  );

  let hereIsYourPassword = "";

  for (i = 0; i < passwordLength; i++) {
    let randomNumber = Math.floor(
      Math.random() * alphabetLowerCasePlusSpecialCharacters.length
    );

    hereIsYourPassword += alphabetLowerCasePlusSpecialCharacters[randomNumber];
  }
  output.innerHTML = hereIsYourPassword;
}

// ============================================================
// Generate A Basic Password Including Symbols And Numbers
// ============================================================

// Generates a password that consists of lower case letters, symbols and numbers

function generateBasicPasswordWithSpecialSymbolsAndNumbers() {
  let passwordLength = document.getElementById("passwordLength").value;
  let alphabetLowerCasePlusSpecialCharacters = alphabetLowerCase.concat(
    specialCharacters
  );
  let alphabetLowerCasePlusSpecialCharactersPlusNumbers = alphabetLowerCasePlusSpecialCharacters.concat(
    numbers
  );

  let hereIsYourPassword = "";

  for (i = 0; i < passwordLength; i++) {
    let randomNumber = Math.floor(
      Math.random() * alphabetLowerCasePlusSpecialCharactersPlusNumbers.length
    );

    hereIsYourPassword +=
      alphabetLowerCasePlusSpecialCharactersPlusNumbers[randomNumber];
  }
  output.innerHTML = hereIsYourPassword;
}

// ============================================================
// Generate A Basic Password Including Upper Case Letters
// ============================================================

// Generates a password that consists of lower case and upper case letters

function generateBasicPasswordWithUpperCase() {
  let passwordLength = document.getElementById("passwordLength").value;
  let alphabetLowerCasePlusUpperCase = alphabetLowerCase.concat(
    alphabetUpperCase
  );

  let hereIsYourPassword = "";

  for (i = 0; i < passwordLength; i++) {
    let randomNumber = Math.floor(
      Math.random() * alphabetLowerCasePlusUpperCase.length
    );

    hereIsYourPassword += alphabetLowerCasePlusUpperCase[randomNumber];
  }
  output.innerHTML = hereIsYourPassword;
}

// ============================================================
// Generate A Basic Password Including Symbols And Upper Case
// ============================================================

// Generates a password that consists of lower case letters, symbols and upper case letters

function generateBasicPasswordWithSpecialSymbolsAndUpperCase() {
  let passwordLength = document.getElementById("passwordLength").value;
  let alphabetLowerCasePlusSpecialCharacters = alphabetLowerCase.concat(
    specialCharacters
  );
  let alphabetLowerCasePlusSpecialCharactersPlusUpperCase = alphabetLowerCasePlusSpecialCharacters.concat(
    alphabetUpperCase
  );

  let hereIsYourPassword = "";

  for (i = 0; i < passwordLength; i++) {
    let randomNumber = Math.floor(
      Math.random() * alphabetLowerCasePlusSpecialCharactersPlusUpperCase.length
    );

    hereIsYourPassword +=
      alphabetLowerCasePlusSpecialCharactersPlusUpperCase[randomNumber];
  }
  output.innerHTML = hereIsYourPassword;
}

// ============================================================
// Generate A Basic Password Including Numbers And Upper Case
// ============================================================

// Generates a password that consists of lower case letters, symbols and upper case letters

function generateBasicPasswordWithNumbersAndUpperCase() {
  let passwordLength = document.getElementById("passwordLength").value;
  let alphabetLowerCasePlusNumbers = alphabetLowerCase.concat(numbers);
  let alphabetLowerCasePlusNumbersPlusUpperCase = alphabetLowerCasePlusNumbers.concat(
    alphabetUpperCase
  );

  let hereIsYourPassword = "";

  for (i = 0; i < passwordLength; i++) {
    let randomNumber = Math.floor(
      Math.random() * alphabetLowerCasePlusNumbersPlusUpperCase.length
    );

    hereIsYourPassword +=
      alphabetLowerCasePlusNumbersPlusUpperCase[randomNumber];
  }
  output.innerHTML = hereIsYourPassword;
}

// ============================================================
// Generate A Basic Password Including All Options
// ============================================================

// Generates a password that consists of lower case letters, symbols, numbers and upper case letters

function generateBasicPasswordWithAllOptions() {
  let passwordLength = document.getElementById("passwordLength").value;

  let alphabetLowerCasePlusAllOptions = alphabetLowerCase.concat(
    numbers,
    specialCharacters,
    alphabetUpperCase
  );

  let hereIsYourPassword = "";

  for (i = 0; i < passwordLength; i++) {
    let randomNumber = Math.floor(
      Math.random() * alphabetLowerCasePlusAllOptions.length
    );

    hereIsYourPassword += alphabetLowerCasePlusAllOptions[randomNumber];
  }
  output.innerHTML = hereIsYourPassword;
}

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
    error.classList.remove("hidden");
    error.innerHTML = "Password length cannot contain letters";
  } else if (
    alphabetUpperCase.some((letter) => passwordLength.includes(letter))
  ) {
    output.innerHTML = "";
    error.classList.remove("hidden");
    error.innerHTML = "Password length cannot contain letters";
  } else if (
    specialCharacters.some((character) => passwordLength.includes(character))
  ) {
    output.innerHTML = "";
    error.classList.remove("hidden");
    error.innerHTML = "Password length cannot contain special characters";
  } else {
    error.innerHTML = "";
    error.classList.add("hidden");
    output.classList.remove("hidden");
    copy.classList.remove("hidden");
    copy.innerText = "Copy to clipboard";
  }
}

// ============================================================
// Choose Which Function To Run
// ============================================================

// Chooses which function to run based on which checkboxes are checked

function chooseFunction() {
  const symbols = document.getElementById("includeSymbolsSwitch");
  const numbers = document.getElementById("includeNumbers");
  const upperCase = document.getElementById("includeUpperCase");

  if (
    symbols.checked === true &&
    numbers.checked === false &&
    upperCase.checked === false
  ) {
    checkPasswordInput();
    generateBasicPasswordWithSpecialSymbols();
    debugPasswordLength();
  } else if (
    symbols.checked === false &&
    numbers.checked === true &&
    upperCase.checked === false
  ) {
    checkPasswordInput();
    generateBasicPasswordWithNumbers();
  } else if (
    symbols.checked === false &&
    numbers.checked === false &&
    upperCase.checked === true
  ) {
    checkPasswordInput();
    generateBasicPasswordWithUpperCase();
  } else if (
    symbols.checked === true &&
    numbers.checked === true &&
    upperCase.checked === false
  ) {
    checkPasswordInput();
    generateBasicPasswordWithSpecialSymbolsAndNumbers();
  } else if (
    symbols.checked === true &&
    numbers.checked === false &&
    upperCase.checked === true
  ) {
    checkPasswordInput();
    generateBasicPasswordWithSpecialSymbolsAndUpperCase();
  } else if (
    symbols.checked === false &&
    numbers.checked === true &&
    upperCase.checked === true
  ) {
    checkPasswordInput();
    generateBasicPasswordWithNumbersAndUpperCase();
  } else if (
    symbols.checked === true &&
    numbers.checked === true &&
    upperCase.checked === true
  ) {
    checkPasswordInput();
    generateBasicPasswordWithAllOptions();
  } else {
    checkPasswordInput();
    generateBasicPassword();
  }
}

// ============================================================
// Copy to clipboard
// ============================================================

// Copies the generated password to the clipboard

// stackoverflow:
function myFunction() {
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
