// JS for rybernate's Solution to Build a Roman Numeral Converter (freeCodeCamp)
const numberInput = document.getElementById("number");
const numberOutput = document.getElementById("output");
const convertBtn = document.getElementById("convert-btn");
let convertedNum;

const convert = (value) => {
  const arabicNum = [
    1000,
    900,
    500,
    400,
    100,
    90,
    50,
    40,
    10,
    9,
    5,
    4,
    1
  ];
  const romanNum = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I"
  ];

  convertedNum = "";
  for(let i = 0; value; i++){
    while(value >= arabicNum[i]){
      value -= arabicNum[i];
      convertedNum += romanNum[i];
    }
  }
  return;
};

const validateAndConvert = () => {
  const number = numberInput.value;
  if (number === "") {

    numberOutput.style.fontSize = "1.4rem";
    numberOutput.style.display = "block";
    numberOutput.innerText = "Please enter a valid number"; 

  }
  else if (number <= 0) {

    numberOutput.style.fontSize = "1.4rem";
    numberOutput.style.display = "block";
    numberOutput.innerText = "Please enter a number greater than or equal to 1";

  }  
  else if (number >= 4000) {

    numberOutput.style.fontSize = "1.4rem";
    numberOutput.style.display = "block";
    numberOutput.innerText = "Please enter a number less than or equal to 3999";

  } 
  else {

    convert(number);
    numberOutput.style.display = "block";
    numberOutput.style.fontSize = "3rem";
    numberOutput.innerText = convertedNum;

  };
};

convertBtn.addEventListener("click", validateAndConvert);
numberInput.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    validateAndConvert();

  }
});