// JS for rybernate's Solution to Build a Palindrome Checker (freeCodeCamp) //
const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");
const icon = document.getElementById("iconography");
const root = document.querySelector(':root');

function cleanInputString(str) {
          const regex = /[^a-z0-9]+/ig;
          return str.toLowerCase().replace(regex, '');
          }

const validatePalindrome = () => {
  
  const potentialPalindrome = textInput.value;

  if (potentialPalindrome === "") {
      alert(`Please input a value`);

      } else {

        const cleanString = cleanInputString(potentialPalindrome);
        const cleanArray = cleanString.split("");
        const cleanStringReverse = cleanArray.reverse().join("");
        
          if (cleanString === cleanStringReverse) {

            result.style.display = "block";
            result.innerText = `${potentialPalindrome} is a palindrome.`;
            root.style.setProperty('--rcolor', '#58a76b');
            icon.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
            textInput.value = "";

          } else {
            
            result.style.display = "block";
            result.innerText = `${potentialPalindrome} is not a palindrome.`;
            root.style.setProperty('--rcolor', '#ad2e2c');
            icon.innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`;
            textInput.value = "";
          } 
      }
  }
checkButton.addEventListener("click", validatePalindrome);
textInput.addEventListener('keydown', enter => {
  if (enter.key === 'Enter') {
    validatePalindrome();
  }
});