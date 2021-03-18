const data = [];
let button = document.querySelector(".submit-button");
let form = document.querySelector(".super-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputName = form["name"];
  const inputAge = form["age"];
  const inputMarried = form["married"];
  const inputHobbies = form["hobbies"];

  const inputForm = {
    name: inputName.value,
    age: inputAge.value,
    married: inputMarried.checked,
    hobbies: inputHobbies.value,
  };

  data.push(inputForm);

  console.log(data);
  form.reset();
});
