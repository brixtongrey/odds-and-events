// ------- STATE ----------

const bank = [];
const odds = [];
const evens = [];

/* TODO:
- Create a method to add a number to the bank
- Create a method to sort one
- Create a method to sort all */

// ------- STATE LOGIC (helper functions) ---------

function addNumber(num) {
  bank.push(num);
  render();
}

// TODO: use sortNumber function and this function will take the first number from our bankAccountInput
function sortOne() {
  const firstNum = bank.shift();
  sortNumber(firstNum);
  render();
}

// Need to create helper function sortNumber
function sortNumber(num) {
  if (num % 2 === 0) {
    evens.push(num);
  } else {
    odds.push(num);
  }
}

function sortAll() {
  while (bank.length > 0) {
    const num = bank.shift();
    sortNumber(num);
  }
  render();
}

// ------------ COMPONENTS --------------

function NumberForm() {
    // need to create the form tag/element
  const $form = document.createElement("form");
    $form.innerHTML = ``;
}







// ------------ RENDER --------------
