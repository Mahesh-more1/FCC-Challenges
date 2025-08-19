const input = document.querySelector("#number");
const button = document.querySelector("#convert-btn");
const result = document.querySelector("#output");

const convertToRoman = (num) => {
  if (num === "") {
    result.textContent = "Please input a value";
    return;
  }
  num = parseInt(num);

  if (!num) {
    result.textContent = "Please input a value";
    return;
  }
  if (num < 1 || num > 3999) {
    result.textContent = "Please input a number between 1 and 3999";
    return;
  }
  const romanNumerals = {
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I",
  };
  let roman = "";
  for (let i of Object.keys(romanNumerals).sort((a, b) => b - a)) {
    let value = Number(i);
    while (num >= value) {
      console.log(num, value, romanNumerals[i]);
      roman += romanNumerals[i];
      num -= value;
    }
  }
  result.textContent = roman;
};

button.addEventListener("click", (e) => {
  e.preventDefault();
  convertToRoman(input.value);
});
