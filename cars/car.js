module.exports = Car;

function Car(mpg) {}

Car.prototype.fill = function(gallons) {
  this.gallons += gallons;
};

function Car({ make, model, year, fuel }) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.fuel = fuel;
}

Car.prototype.addFuel = function(fuel) {
  this.fuel += fuel;
};

const ford = new Car({ make: 'Ford', model: 'Escape', year: 2013, fuel: 100 });

ford.addFuel(10);
console.log(ford.fuel);
