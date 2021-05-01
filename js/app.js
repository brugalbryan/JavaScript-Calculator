const mainDisplay = document.querySelector(".main-display");
const secondDisplay = document.querySelector(".second-display");
const shortDisplay = document.querySelector(".short-display");
const getNumbers = document.querySelectorAll(".number");
const ArithmeticEl = document.querySelectorAll(".Arithmetic");
const getEqual = document.querySelector(".equal");
const ClearEverything = document.querySelector(".allClear");
const clearLast_value = document.querySelector(".lastClear");
let disValue = "";
let dis2ndValue = "";
let result = null;
let lastArithmetic = "";
let decimalDot = false; 

getNumbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    if (event.target.innerText === "." && !decimalDot) {
      decimalDot = true;
    } else if (event.target.innerText === "." && decimalDot) {
      return;
    }
    dis2ndValue += event.target.innerText;
    secondDisplay.innerText = dis2ndValue;
    // console.log();
  });
});

ArithmeticEl.forEach((Arithmetic) => {
  Arithmetic.addEventListener("click", (event) => {
    if (!dis2ndValue) return;
    decimalDot = false;
    const ArithmeticName = event.target.innerText;
    if (disValue && dis2ndValue && lastArithmetic) {
      mathArithmetic();
    } else {
      result = parseFloat(dis2ndValue);
    }
    clearVar(ArithmeticName);
    lastArithmetic = ArithmeticName;
    console.log(result);
  });
});

function clearVar(name = "") {
  disValue += dis2ndValue + " " + name + " ";
  mainDisplay.innerText = disValue;
  secondDisplay.innerText = "";
  dis2ndValue = "";
  shortDisplay.innerText = result;
}

function mathArithmetic() {
  if (lastArithmetic === "x") {
    result = parseFloat(result) * parseFloat(dis2ndValue);
  } else if (lastArithmetic === "+") {
    result = parseFloat(result) + parseFloat(dis2ndValue);
  } else if (lastArithmetic === "-") {
    result = parseFloat(result) - parseFloat(dis2ndValue);
  } else if (lastArithmetic === "/") {
    result = parseFloat(result) / parseFloat(dis2ndValue);
  } else if (lastArithmetic === "%") {
    result = parseFloat(result) % parseFloat(dis2ndValue);
  }
}
// Arithmetic();

getEqual.addEventListener("click", () => {
  if (!dis2ndValue || !disValue) return;
  decimalDot = false;
  mathArithmetic();
  clearVar();
  secondDisplay.innerText = result;
  shortDisplay.innerText = "";
  dis2ndValue = result;
  disValue = "";
});

ClearEverything.addEventListener("click", () => {
  disValue = "";
  dis2ndValue = "";
  mainDisplay.innerText = "";
  secondDisplay.innerText = "";
  result = "";
  shortDisplay.innerText = "";
});

clearLast_value.addEventListener("click", () => {
  secondDisplay.innerText = "";
  dis2ndValue = "";
});

window.addEventListener("keydown", (event) => {
  if (
    event.key === "0" ||
    event.key === "1" ||
    event.key === "2" ||
    event.key === "3" ||
    event.key === "4" ||
    event.key === "5" ||
    event.key === "6" ||
    event.key === "7" ||
    event.key === "8" ||
    event.key === "9" ||
    event.key === "."
  ) {
    clickButtonEl(event.key);
    // console.log(event.key)
  } else if (event.key === "+" || event.key === "-" || event.key === "/" || event.key === "%") {
    clickArithmetic(event.key);
  } else if (event.key === "*") {
    clickArithmetic("x");
    // console.log(event.key)
  } else if (event.key == "Enter" || event.key === "=") {
    clickEqual();
  }
  // console.log(event.key)
});
function clickButtonEl(key) {
  getNumbers.forEach((button) => {
    if (button.innerText === key) {
      button.click();
    }
  });
}
function clickArithmetic(key) {
  ArithmeticEl.forEach((Arithmetic) => {
    if (Arithmetic.innerText === key) {
      Arithmetic.click();
    }
  });
}
function clickEqual() {
  getEqual.click();
}