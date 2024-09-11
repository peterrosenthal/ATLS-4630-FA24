const form = document.querySelector('form');

function processForm(event) {
  event.preventDefault();

  const formData = new FormData(form);

  const firstName = formData.get('first-name');
  const lastName = formData.get('last-name');

  // const fullName = firstName + " " + lastName;
  const fullName = `${firstName} ${lastName}`;

  console.log(fullName);
}

form.addEventListener('submit', processForm);

const firstNameInput = document.getElementById('first-name-input');
firstNameInput.addEventListener('change', () => {
  console.log(firstNameInput.value);
});

const favoriteColorInput = document.getElementById('favorite-color-input');

function setPageBackgroundColor() {
  const body = document.querySelector('body');
  body.style.backgroundColor = favoriteColorInput.value;
}

favoriteColorInput.addEventListener('input', setPageBackgroundColor);

console.log(1 === "1"); // false
console.log(1 == "1");  // true
