const convertBtn = document.querySelector("#js-convert-button");
const reverseBtn = document.querySelector("#js-reverse-button");
const resetBtn = document.querySelector("#js-reset-button");

const inputElement = document.querySelector("#js-input");
const outputElement = document.querySelector("#js-output");

const inputLabel = document.querySelector("#label-input");
const outputLabel = document.querySelector("#label-output");

const equationText = document.querySelector("#equation");
const subsituteText = document.querySelector("#subsitute-text");
const resultText = document.querySelector("#result-text");

convertBtn.addEventListener("click", () => {
  convert();
});

reverseBtn.addEventListener("click", () => {
  reverse();
  reset();
});

resetBtn.addEventListener("click", () => {
  reset();
});

let inputMode = "C";

function convert() {
  let result;
  let inputValue = Number(inputElement.value);
  if (isNaN(inputValue)) {
    alert("Hanya Boleh Masukkan Angka");
    return;
  }
  if (!inputValue) {
    alert("Tolong Masukkan Angka Terlebih Dahulu");
    return;
  }
  if (inputMode === "C") {
    result = inputValue * (9 / 5) + 32;
  } else if (inputMode === "F") {
    result = (inputValue - 32) * (5 / 9);
  }
  outputHTML(inputValue, result);
}

function outputHTML(inputValue, result) {
  outputElement.value = result;
  if (inputMode === "C") {
    subsituteText.innerHTML = `S<sub>(&deg;F)</sub> = ( ${inputValue} &times; 9 / 5 ) + 32`;
    resultText.innerHTML = `S<sub>(&deg;F)</sub> = ${result}`;
  } else if (inputMode == "F") {
    subsituteText.innerHTML = `S<sub>(&deg;C)</sub> = ( ${inputValue} - 32 ) &times; 5/ 9`;
    resultText.innerHTML = `S<sub>(&deg;C)</sub> = ${result}`;
  }
}

function reverse() {
  if (inputMode === "C") {
    inputMode = "F";
    inputLabel.textContent = "Farenheit";
    outputLabel.textContent = "Celcius";
    equationText.innerHTML =
      "S<sub>(&deg;C)</sub> = ( S<sub>(&deg;F)</sub> - 32 ) &times; 5 / 9";
  } else if (inputMode === "F") {
    inputMode = "C";
    inputLabel.textContent = "Celcius";
    outputLabel.textContent = "Farenheit";
    equationText.innerHTML =
      "S<sub>(&deg;F)</sub> = ( S<sub>(&deg;C)</sub> &times; 9 / 5 ) + 32";
  }
}

function reset() {
  inputElement.value = "";
  outputElement.value = "";
  subsituteText.innerHTML = "";
  resultText.innerHTML = "";
}
