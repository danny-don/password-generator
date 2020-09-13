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
const alphabetUpperCase = "ABCDEFGHIJKLMNOPQRSTUVXYZ".split("");
const numbers = "1234567890".split("");
const specialCharacters = '¬!"£$%^&*()-_=+#~[]{}@:;,.|/'.split("");
// const specialCharacters = "!£$%^&*()@".split("");

// ============================================================
// Generate A Basic Password (Lower Case Letters Only)
// ============================================================

// Generates a password that consists of only lower case letters

function generateBasicPassword() {
  let passwordLength = document.getElementById("passwordLength").value;
  let hereIsYourPassword = "";

  for (i = 0; i < passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * alphabetLowerCase.length);

    hereIsYourPassword += alphabetLowerCase[randomNumber];
  }

  output.innerHTML = hereIsYourPassword;
  return hereIsYourPassword;
}

// ============================================================
// Generate A Basic Password Including Symbols/Special Characters
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
// Generate A Special-Characters-Only Password
// ============================================================

// Generates a password that consists of only special characters

function generateSpecialCharactersOnly() {
  let passwordLength = document.getElementById("passwordLength").value;
  let hereIsYourPassword = "";

  for (i = 0; i < passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * specialCharacters.length);

    hereIsYourPassword += specialCharacters[randomNumber];
  }

  output.innerHTML = hereIsYourPassword;
  return hereIsYourPassword;
}

// ============================================================
// Generate A Symbols Password Including Numbers
// ============================================================

// Generates a password that consists of symbols and numbers

function generateSpecialSymbolsWithNumbers() {
  let passwordLength = document.getElementById("passwordLength").value;
  let specialCharactersPlusNumbers = specialCharacters.concat(numbers);

  let hereIsYourPassword = "";

  for (i = 0; i < passwordLength; i++) {
    let randomNumber = Math.floor(
      Math.random() * specialCharactersPlusNumbers.length
    );

    hereIsYourPassword += specialCharactersPlusNumbers[randomNumber];
  }
  output.innerHTML = hereIsYourPassword;
}

// ============================================================
// Generate A Symbols Password Including Upper Case letters
// ============================================================

// Generates a password that consists of symbols and upper case

function generateSpecialSymbolsWithUpperCase() {
  let passwordLength = document.getElementById("passwordLength").value;
  let specialCharactersPlusUpperCase = specialCharacters.concat(
    alphabetUpperCase
  );

  let hereIsYourPassword = "";

  for (i = 0; i < passwordLength; i++) {
    let randomNumber = Math.floor(
      Math.random() * specialCharactersPlusUpperCase.length
    );

    hereIsYourPassword += specialCharactersPlusUpperCase[randomNumber];
  }
  output.innerHTML = hereIsYourPassword;
}

// ============================================================
// Generate A Symbols Password Including Numbers And Upper Case
// ============================================================

// Generates a password that consists of symbols, numbers and upper case letters

function generateSymbolsPasswordWithNumbersAndUpperCase() {
  let passwordLength = document.getElementById("passwordLength").value;
  let symbolsPlusNumbers = specialCharacters.concat(numbers);
  let symbolsPlusNumbersPlusUpperCase = symbolsPlusNumbers.concat(
    alphabetUpperCase
  );

  let hereIsYourPassword = "";

  for (i = 0; i < passwordLength; i++) {
    let randomNumber = Math.floor(
      Math.random() * symbolsPlusNumbersPlusUpperCase.length
    );

    hereIsYourPassword += symbolsPlusNumbersPlusUpperCase[randomNumber];
  }
  output.innerHTML = hereIsYourPassword;
}

// ============================================================
// Generate A Numbers-Only Password
// ============================================================

// Generates a password that consists of only numbers

function generateNumbersOnly() {
  let passwordLength = document.getElementById("passwordLength").value;
  let hereIsYourPassword = "";

  for (i = 0; i < passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * numbers.length);

    hereIsYourPassword += numbers[randomNumber];
  }

  output.innerHTML = hereIsYourPassword;
  return hereIsYourPassword;
}

// ============================================================
// Generate A Numbers Password Including Upper Case Letters
// ============================================================

// Generates a password that consists of numbers and upper case letters

function generateNumbersPasswordWithUpperCase() {
  let passwordLength = document.getElementById("passwordLength").value;
  let numbersPlusUpperCase = numbers.concat(alphabetUpperCase);

  let hereIsYourPassword = "";

  for (i = 0; i < passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * numbersPlusUpperCase.length);

    hereIsYourPassword += numbersPlusUpperCase[randomNumber];
  }
  output.innerHTML = hereIsYourPassword;
}

// ============================================================
// Generate A Upper-Case-Letters-Only Password
// ============================================================

// Generates a password that consists of only upper case letters

function generateUpperCaseOnly() {
  let passwordLength = document.getElementById("passwordLength").value;
  let hereIsYourPassword = "";

  for (i = 0; i < passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * alphabetUpperCase.length);

    hereIsYourPassword += alphabetUpperCase[randomNumber];
  }

  output.innerHTML = hereIsYourPassword;
  return hereIsYourPassword;
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
// Choose Which Function To Run
// ============================================================

// Chooses which function to run based on which checkboxes are checked

function chooseFunction() {
  if (
    includeLowerCase.checked === false &&
    includeSymbols.checked === false &&
    includeNumbers.checked === false &&
    includeUpperCase.checked === false
  ) {
    checkPasswordInput();
  } else if (
    includeLowerCase.checked === true &&
    includeSymbols.checked === false &&
    includeNumbers.checked === false &&
    includeUpperCase.checked === false
  ) {
    checkPasswordInput();
    generateBasicPassword();
  } else if (
    includeLowerCase.checked === true &&
    includeSymbols.checked === true &&
    includeNumbers.checked === false &&
    includeUpperCase.checked === false
  ) {
    checkPasswordInput();
    generateBasicPasswordWithSpecialSymbols();
  } else if (
    includeLowerCase.checked === true &&
    includeSymbols.checked === false &&
    includeNumbers.checked === true &&
    includeUpperCase.checked === false
  ) {
    checkPasswordInput();
    generateBasicPasswordWithNumbers();
  } else if (
    includeLowerCase.checked === true &&
    includeSymbols.checked === false &&
    includeNumbers.checked === false &&
    includeUpperCase.checked === true
  ) {
    checkPasswordInput();
    generateBasicPasswordWithUpperCase();
  } else if (
    includeLowerCase.checked === true &&
    includeSymbols.checked === true &&
    includeNumbers.checked === true &&
    includeUpperCase.checked === false
  ) {
    checkPasswordInput();
    generateBasicPasswordWithSpecialSymbolsAndNumbers();
  } else if (
    includeLowerCase.checked === true &&
    includeSymbols.checked === true &&
    includeNumbers.checked === false &&
    includeUpperCase.checked === true
  ) {
    checkPasswordInput();
    generateBasicPasswordWithSpecialSymbolsAndUpperCase();
  } else if (
    includeLowerCase.checked === true &&
    includeSymbols.checked === false &&
    includeNumbers.checked === true &&
    includeUpperCase.checked === true
  ) {
    checkPasswordInput();
    generateBasicPasswordWithNumbersAndUpperCase();
  } else if (
    includeLowerCase.checked === true &&
    includeSymbols.checked === true &&
    includeNumbers.checked === true &&
    includeUpperCase.checked === true
  ) {
    checkPasswordInput();
    generateBasicPasswordWithAllOptions();
  } else if (
    includeLowerCase.checked === false &&
    includeSymbols.checked === true &&
    includeNumbers.checked === false &&
    includeUpperCase.checked === false
  ) {
    checkPasswordInput();
    generateSpecialCharactersOnly();
  } else if (
    includeLowerCase.checked === false &&
    includeSymbols.checked === false &&
    includeNumbers.checked === true &&
    includeUpperCase.checked === false
  ) {
    checkPasswordInput();
    generateNumbersOnly();
  } else if (
    includeLowerCase.checked === false &&
    includeSymbols.checked === false &&
    includeNumbers.checked === false &&
    includeUpperCase.checked === true
  ) {
    checkPasswordInput();
    generateUpperCaseOnly();
  } else if (
    includeLowerCase.checked === false &&
    includeSymbols.checked === true &&
    includeNumbers.checked === true &&
    includeUpperCase.checked === false
  ) {
    checkPasswordInput();
    generateSpecialSymbolsWithNumbers();
  } else if (
    includeLowerCase.checked === false &&
    includeSymbols.checked === true &&
    includeNumbers.checked === false &&
    includeUpperCase.checked === true
  ) {
    checkPasswordInput();
    generateSpecialSymbolsWithUpperCase();
  } else if (
    includeLowerCase.checked === false &&
    includeSymbols.checked === true &&
    includeNumbers.checked === true &&
    includeUpperCase.checked === true
  ) {
    checkPasswordInput();
    generateSymbolsPasswordWithNumbersAndUpperCase();
  } else if (
    includeLowerCase.checked === false &&
    includeSymbols.checked === false &&
    includeNumbers.checked === true &&
    includeUpperCase.checked === true
  ) {
    checkPasswordInput();
    generateNumbersPasswordWithUpperCase();
  }
}

// ============================================================
// Copy to clipboard
// ============================================================

// Copies the generated password to the clipboard

// stackoverflow:
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
