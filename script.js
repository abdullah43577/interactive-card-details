"use strict";
const nameNumb = document.querySelectorAll(".nameNumb");
const number = document.querySelectorAll(".number");
const cvc = document.querySelector(".cvc");
const btn = document.querySelector("button");
const formHandler = document.querySelector("form");
const cardNumber = document.querySelector("figcaption > h3");
const cardName = document.querySelector(".details > :first-child");
const mtDate = document.querySelector(".mtDate");
const errorMsg = document.querySelectorAll(".errorMsg");
const cvcCard = document.querySelector(".cvcCard");

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
  cardNumbervalue = nameNumb[1].value.toUpperCase();
  month = number[0].value;
  year = number[1].value;
  code = cvc.value;
  console.log(cvc.value);

  // if ((cardHolderName, cardNumbervalue, month, year, code)) {}
  isPureString(cardHolderName, 0);
  isPureNumber(cardNumbervalue, 1);
  isPureNumber2(month, 2);
  isPureNumber2(year, 2);
  isPureNumber(code, 3);
  renderCardDetails();
});

function isPureString(parameter, index) {
  // checks if the parameter doesn't match any string from a-z or if it matches any number from 0 - 9
  if (!parameter.match(/[a-zA-Z]/g) || parameter.match(/\d/g)) {
    errorMsg[index].textContent = `Wrong format, text only`;
    showErrorMessage(index);
  }
}

function isPureNumber(parameter, index) {
  // if the parameter matches any letter from a - z
  if (parameter.match(/[a-zA-Z]/g) || parameter === "") {
    errorMsg[index].textContent = `Wrong format, number only`;
    showErrorMessage(index);
  } else {
    console.log("this is correct");
  }
}

function isPureNumber2(parameter, index) {
  // if the parameter matches any letter from a - z
  if (parameter.match(/[a-zA-Z]/g) || parameter === "") {
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

function renderCardDetails() {
  cardNumber.textContent = cardNumbervalue;
  cardName.textContent = cardHolderName;
  mtDate.textContent = `${month}/${year}`;
  cvcCard.textContent = code;
}

// callBack function for iterating through all strings in the input and spacing them out into 4 chunks of text
nameNumb[1].addEventListener("input", () => {
  const test1 = nameNumb[1].value.split("");
  console.log(test1);

  // make a research to see the kinds of arguments the join method supports maybe we could specify where to add spaces in the join argument and then update the input.value in real time.
  const test2 = test1.splice("").join("");
  console.log(test2);
});
