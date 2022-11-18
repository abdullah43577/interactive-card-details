"use strict";
const formAction = document.querySelector("form");
const cardHolderName = document.querySelector(".cardHolderName");
const cardHolderNumber = document.querySelector(".cardHolderNumber");
const month = document.querySelector(".month");
const year = document.querySelector(".year");
const cvc = document.querySelector(".cvc");
const button = document.querySelector("button");
const errorMessages = document.querySelectorAll(".errorMsg");
const inputs = document.querySelectorAll("input");
const cardName = document.querySelector(".details > :first-child");
const mtDate = document.querySelector(".mtDate");
const creditNumber = document.querySelector("figcaption > h3");
const cvcCard = document.querySelector(".second > p");

formAction.addEventListener("submit", (e) => {
  e.preventDefault();
});

let chNameValue;
let chNumberValue;
let monthValue;
let yearValue;
let cvcValue;

button.addEventListener("click", () => {
  // storing values of the inputs into variables
  chNameValue = cardHolderName.value.toUpperCase();
  chNumberValue = cardHolderNumber.value;
  monthValue = month.value;
  yearValue = year.value;
  cvcValue = cvc.value;

  if (
    // checks if the parameter matches any string from a-z and doesn't match any string from 0-9
    chNameValue.match(/[a-zA-Z]/g) &&
    !chNameValue.match(/\d/g)
  ) {
    console.log("This is correct");
  } else {
    showErrorMessage(0, `Wrong format, texts only`, 0);
  }

  // This takes in the variable where the values where stored, the errormessage[index], and the inputs[index], and the errorMessage to be displayed
  isPureNumber(chNumberValue, 1, 1, `Wrong format, numbers only`);
  isPureNumber(monthValue, 2, 2, `Can't be blank`);
  isPureNumber(yearValue, 2, 3, `Can't be blank`);
  isPureNumber(cvcValue, 3, 4, `Can't be blank`);
});

function showErrorMessage(index, displayErrorMessage, input) {
  errorMessages[index].textContent = `${displayErrorMessage}`;
  errorMessages[index].classList.add("errormessage");
  inputs[input].style.border = "1px solid red";

  setTimeout(() => {
    errorMessages[index].textContent = "";
    errorMessages[index].classList.remove("errormessage");
    inputs[input].style.border = "none";
  }, 3000);
}

// This takes in the variable where the values where stored, the errormessage[index], and the inputs[index], and the errorMessage to be displayed
function isPureNumber(parameter, index, input, errormsg) {
  if (parameter.match(/\d/g) && !parameter.match(/[a-zA-Z]/g)) {
    console.log("This is correct");
    renderCardDetails();
  } else {
    showErrorMessage(index, errormsg, input);
  }
}

function renderCardDetails() {
  if ((chNameValue, chNumberValue, monthValue, yearValue, cvcValue)) {
    cardName.textContent = chNameValue;
    creditNumber.textContent = chNumberValue;
    mtDate.textContent = `${monthValue}/${yearValue}`;
    cvcCard.textContent = cvcValue;

    document.querySelector(".box").classList.add("hidden");
    document.querySelector(".hiddenContainer").classList.remove("hidden");
  }
}

inputs[1].addEventListener("keydown", () => {
  console.log(inputs[1].value);
  const formattedInputField = formatInputField(inputs[1].value);
  inputs[1].value = formattedInputField;
  console.log(inputs[1].value.length);
});

function formatInputField(value) {
  if (!value) return value;
  const InputValidator = value.replace(/[^\d]/g, "");
  const InputValidatorlength = InputValidator.length;
  if (InputValidatorlength < 4) return InputValidator;
  if (InputValidatorlength < 7) {
    return `${InputValidator.slice(0, 4)} ${InputValidator.slice(4)}`;
  }
  return `${InputValidator.slice(0, 4)} ${InputValidator.slice(
    4,
    8
  )} ${InputValidator.slice(8, 12)} ${InputValidator.slice(
    12,
    16
  )} ${InputValidator.slice(16, 19)}`;
}
