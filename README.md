# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![Screenshot 1](<./design/Screenshot%20(1).png>)
![Screenshot 2](<./design/Screenshot%20(2).png>)
![Screenshot 3](<./design/Screenshot%20(3).png>)
![Screenshot 4](<./design/Screenshot%20(4).png>)

### Links

- Solution URL: [Solution URL here](https://www.frontendmentor.io/solutions/responsive-interactive-card-detail-2_3k30C2Jt)
- Live Site URL: [live site URL here](https://interactivecard-d.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Desktop-first workflow

### What I learned

Some of the codes which I'm proud of are listed below:

```js
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

function showErrorMessage(index) {
  errorMsg[index].classList.add("errormessage");
  nameNumb[index].style.border = "1px solid red";

  setTimeout(() => {
    errorMsg[index].textContent = "";
    errorMsg[index].classList.remove("errormessage");
    nameNumb[index].style.border = "none";
  }, 3000);
}
```

### Continued development

I'll need to keep working on using regex to get better using it. It's a really powerful tool

### Useful resources

- [Resource](https://regex101.com/) - This helped me for making sure the input was a valid input. Regex is a very good tool anyone can implement using javascript. You don't even have to know how it works fully to get started using it.

- [Resource 2](https://developer.mozilla.org/) - This is an amazing resource website that helped me understand some strings and array methods even better.

## Author

- Website - [Abdullah Ayoola](https://github.com/abdullah43577)
- Frontend Mentor - [@abdullah43577](https://www.frontendmentor.io/profile/abdullah43577)
- Twitter - [@officialayo540](https://twitter.com/officialayo540)
