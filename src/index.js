import WishList from "src/wishlist.js";
console.log("Hello World");
// TODO

// Select the form
let form = document.querySelector("#submitForm");
// Select the input for car make
let makeInput = document.querySelector("#makeInput");
// Select the input for car model
let modelInput = document.querySelector("#modelInput");
// Select the input for car year
let yearInput = document.querySelector("#yearInput");
// Select the paragraph element for car make
let carMake = document.querySelector("#car-make");
// Select the paragraph element for car model
let carModel = document.querySelector("#car-model");
// Select the paragraph element for car year
let carYear = document.querySelector("#car-year");
// Select the remove button
let removeButton = document.querySelector(".btn btn-warning removeBtn");
// Select the wishlist unordered list element
let wishlistUl = document.querySelector("#wishListContainer > ul");
// Call the WishList constructor to create an instance from the WishList class
let wishlist = new WishList();

form.addEventListener("submit", addCar);
removeButton.addEventListener("click", removeCar);

function showCarDetails(car) {
  // update car display txt
  carMake.textContent = car.make;
  carModel.textContent = car.model;
  carYear.textContent = car.year;
  // enable the remove button
  removeButton.disabled = false;
  // set current car's id to the data-carId attribute of removeButton
  removeButton.setAttribute("data-cae.id", car.id);
}

function updateDOMList() {
  // clear the ul contents
  listUl.innerHTML = "";

  //iterate through the list of cars
  wishlist.list.forEach((car) => {
    let li = document.createElement("li");
    li.textContent = car.model;
    li.addEventListener("click", () => showCarDetails(car));
    listUl.appendChild(li);
  });
}

function addCar(event) {
  event.preventDefault();
  wishlist.add(make, model, year);
  updateDOMList();

  // reset display values
  carMake.value = "";
  carModel.value = "";
  carYear.value = "";
}

function removeCar() {
  let carId = removeButton.getAttribute("data-carId");
  wishlist.remove(carId);
  updateDOMList();

  carMake.textContent = "";
  carModel.textContent = "";
  carYear.textContent = "";
}
