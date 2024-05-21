// JS for rybernate's Solution to Build a Cash Register (freeCodeCamp) //
const purchaseBtn = document.getElementById("purchase-btn");
const changeDue = document.getElementById("change-due");
const purchasePrice = document.getElementById("price");
const fundsInRegister = document.getElementById("funds-in-register");
const cash = document.getElementById("cash");
let price = 19.5;

let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
];

const monValues = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
const cidLength = cid.length - 1;
const mvLength = monValues.length -1;
const displayRegFunds = () => {
  for (let i=0; i<=cidLength; i++){
      fundsInRegister.innerHTML += `<div>${cid[i][0]}: $${cid[i][1].toFixed(2)}</div>`;
    };
  return;
};

purchasePrice.innerText = `$${price.toFixed(2)}`;
displayRegFunds();


const getRegTotal = () => {
  let regTotal = 0;
  for (let i=cidLength; i>=0; i--){
    regTotal = Number(cid[i][1] * 100) + regTotal;
  };
  return regTotal = regTotal / 100;;
};

const getNumberOfBillsAndCoins = () => {
  const tally = [];
  for (let i=mvLength; i>=0; i--){
     tally.unshift(Math.round((cid[i][1] * 100) / (monValues[i] * 100)));
  };
  return tally;
};


const checkRegisterFunds = () => {
  const regTotal = getRegTotal();
  const change = ((cash.value *100) - (price *100)) / 100;
  if (Number(cash.value) < price){
    alert("Customer does not have enough money to purchase the item");
  } else if (Number(cash.value) === price){
    changeDue.style.display = "block";
    changeDue.style.backgroundColor = "blue";
    changeDue.textContent = "No change due - customer paid with exact cash";
  } else if (change > regTotal){
    changeDue.style.display = "block";
    changeDue.style.backgroundColor = "red";
    changeDue.textContent = "Status: INSUFFICIENT_FUNDS";
  } else {
    getChange(regTotal, change);
  };
  return cash.value = "";
};

const getChange = (regTotal, change) => {
  const tally = getNumberOfBillsAndCoins();
  let a = change*100;
  let changeMsg = "";
  for (let i=mvLength; i>=0; i--){  
    const b = (monValues[i]*100);
    const c = (b * tally[i]);
    const d = Math.floor(a / b); 
    if (d !== 0 && d >= tally[i] && tally[i] != 0){ 
      a = Math.round(a - c);
      changeMsg += " " + cid[i][0] + ": $" + c / 100;
    } else if (d !== 0 && d < tally[i]){
      a = Math.round(a - (d * b));
      changeMsg += " " + cid[i][0] + ": $" + (d * b) / 100; 
    } else {
      a = Math.round(a);
    };
  };
  if (a === 0 && regTotal - change !== 0){
      changeDue.style.display = "block";
      changeDue.style.backgroundColor = "#067117";
      changeDue.textContent = "Status: OPEN" + changeMsg;
  } else if (a === 0 && regTotal - change === 0){
      changeDue.style.display = "block";
      changeDue.style.backgroundColor = "#067117";
      changeDue.textContent = "Status: CLOSED" + changeMsg;
  } else {
      changeDue.style.display = "block";
      changeDue.style.backgroundColor = "red";
      changeDue.textContent = "Status: INSUFFICIENT_FUNDS";
  };
  return;
};

purchaseBtn.addEventListener("click",checkRegisterFunds);
cash.addEventListener("keydown", e => {
  if (e.key === "Enter"){
    checkRegisterFunds();
  }
});