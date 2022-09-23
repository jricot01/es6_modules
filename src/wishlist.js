import Car from "src/car.js";

export default class WishList {
  // two class properties
  list = [];
  nextId = 0;

  add(make, model, year) {
    // use the Car class to create a new car
    let car = new Car(this.nextId++, make, model, year);
    //add that car to the wishlist list
    this.list.push(car);
  }

  remove(carId) {
    // find the car in the wishlist that matches the remove id
    let index = this.list.findIndex((car) => car.id == carId);
    // remove it and update the wishlist list
    this.list.splice(index, 1);
  }
}
