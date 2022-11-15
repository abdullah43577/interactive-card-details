"use strict";
const nameNumb = document.querySelectorAll(".nameNumb");
const number = document.querySelectorAll(".number");
const cvc = document.querySelector(".cvc");
const btn = document.querySelector("button");
const formHandler = document.querySelector("form");
const cardNumber = document.querySelector("figcaption > h3");
const cardName = document.querySelector(".details > :first-child");
const mtDate = document.querySelector("mtDate");
const errorMsg = document.querySelectorAll(".errorMsg");
const cvcNo = document.querySelector("cvcNo");

// prevents the form from submitting / refreshing each time I click the button
formHandler.addEventListener("submit", (e) => {
  e.preventDefault();
});

let cardHolderName;
let cardNumbervalue;
let month;
let year;
let code;

btn.addEventListener("click", () => {
  cardHolderName = nameNumb[0].value;
  cardNumbervalue = nameNumb[1].value;
  month = number[0].value;
  year = number[1].value;
  code = cvc.value;

  // console.log(cardHolderName.split(/\da{4}/g, "4"));

  isPureString(cardHolderName, 0);
  isPureNumber(cardNumbervalue, 1);
  isPureNumber2(month, 2);
  isPureNumber2(year, 3);
});

function isPureString(parameter, index) {
  if (!parameter.match(/[a-zA-Z]/g)) {
    errorMsg[index].textContent = `Wrong format, text only`;
    showErrorMessage(index);
  }
}

function isPureNumber(parameter, index) {
  // if the parameter matches anything other than a number or decimal
  if (parameter.match(/\D+/)) {
    errorMsg[index].textContent = `Wrong format, number only`;
    showErrorMessage(index);
  } else {
    console.log("this is correct");
  }
}

function isPureNumber2(parameter, index) {
  // if the parameter matches anything other than a number or decimal
  if (parameter.match(/\D+/)) {
    errorMsg[index].textContent = `Can't be blank`;
    showErrorMessage(index);
  }
}

function showErrorMessage(index) {
  errorMsg[index].classList.add("errormessage");
  nameNumb[index].style.border = "1px solid red";

  setTimeout(() => {
    errorMsg[index].textContent = "";
    errorMsg[index].classList.remove("errormessage");
    nameNumb[index].style.border = "none";
  }, 3000);
}

function domRenderer() {
  cardNumber.textContent = cardNumbervalue;
  cardName.textContent = cardHolderName;
  mtDate.textContent = month + year;
  cvcNo.textContent = code;
}
