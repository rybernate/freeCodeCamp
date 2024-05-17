// JS for rybernate's Solution to Build a Telephone Number Validator (freeCodeCamp) //
const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const results = document.getElementById("results-div");
const root = document.querySelector(':root');
const regex = /^(1\s?)?(\([1-9]{3}\)|[1-9]{3})[\s\-]?[0-9]{3}[\s\-]?[0-9]{4}$/g;

function clearThis() {
 userInput.value = "";
 results.innerHTML = "";
 root.style.setProperty("--iconDisplay", "none");
};

function validateNum() {
  if (userInput.value === ""){
    alert("Please provide a phone number");
  } else if (userInput.value.match(regex)){
    results.innerHTML = `<strong>Valid US number: ${userInput.value}</strong><br/><i class="fa-solid fa-phone" id="icon"></i>`;
    root.style.setProperty("--iconColor", "green");
    root.style.setProperty("--iconDisplay", "block");

  } else {
    results.innerHTML = `<strong>Invalid US number: ${userInput.value}</strong><br/><i class="fa-solid fa-phone-slash" id="icon"></i>`;
    root.style.setProperty("--iconColor", "red");
    root.style.setProperty("--iconDisplay", "block");
  }
};

checkBtn.addEventListener("click", validateNum);
userInput.addEventListener("keydown", (enter) => enter.key === "Enter" ? validateNum : null);
clearBtn.addEventListener("click", clearThis);