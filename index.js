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
  $form.innerHTML = `
     <label for="number">Add a number</label>
    <input name="number" id="number" type="text" placeholder="Enter number">
    <button type="submit" data-action="add">Add Number</button>
    <button type="submit" data-action="sortOne">Sort 1</button>
    <button type="submit" data-action="sortAll">Sort All</button>
    `;

  $form.addEventListener("submit", function (event) {
    // prevent the page from refreshing:
    event.preventDefault();

    const action = event.submitter.dataset.action;
    const formData = new FormData($form);
    const inputNumber = parseInt(formData.get("number"));

    if (action === "add" && !isNaN(inputNumber)) {
      addNumber(inputNumber);
      $form.reset();
    } else if (action === "sortOne") {
      sortOne();
    } else if (action === "sortAll") {
      sortAll();
    }
  });
  return $form;
}

function NumberGroup(label, items) {
  const $section = document.createElement("section");
  $section.innerHTML = `
  <h2>${label}</h2>
  <ul></ul>`;

  const $ul = $section.querySelector("ul");

  items.forEach((num) => {
    const $li = document.createElement("li");
    $li.textContent = num;
    $ul.appendChild($li);
  });
  return $section;
}

// call functions:
NumberForm();
NumberGroup(); 



// ------------ RENDER --------------
