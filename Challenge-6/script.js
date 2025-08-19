const input = document.querySelector("#text-input");
const button = document.querySelector("#check-btn");
const result = document.querySelector("#result");

const checkPalindrome = (str) => {
  let userInput = str.trim();
  if (!userInput) {
    alert("Please input a value");
    return;
  }

  let normalizedInput = userInput.toLowerCase().replace(/[^a-z0-9]/gi, "");
  let reversedInput = [...normalizedInput].reverse().join("");

  result.textContent = 
    normalizedInput === reversedInput 
      ? `${str} is a palindrome`
      : `${str} is not a palindrome`;
};

button.addEventListener("click", (e) => {
  e.preventDefault();
  checkPalindrome(input.value);
});