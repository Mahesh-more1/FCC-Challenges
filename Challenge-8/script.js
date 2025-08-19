const inputField = document.querySelector("#user-input");
const checkButton = document.querySelector("#check-btn");
const clearButton = document.querySelector("#clear-btn");
const resultsDiv = document.querySelector("#results-div");

const validatePhoneNumber = (num) => {
    const pattern = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/;

    if (!num) {
        alert("Please provide a phone number");
        return;
    }

    if (pattern.test(num)) {
        resultsDiv.textContent = `Valid US number: ${num}`;
        resultsDiv.style.color = "green";
    } else {
        resultsDiv.textContent = `Invalid US number: ${num}`;
        resultsDiv.style.color = "red";
    }
};

checkButton.addEventListener("click", () => {
    validatePhoneNumber(inputField.value.trim());
});

clearButton.addEventListener("click", () => {
    resultsDiv.textContent = "";
    inputField.value = "";
});
