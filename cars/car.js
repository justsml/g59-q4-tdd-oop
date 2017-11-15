module.exports = Car

function Car(mpg) {

}

Car.prototype.fill = function(gallons) {
  this.gallons += gallons
}

//yesterday
function Car({make, model, year, fuel}) {
  this.make = make
  this.model = model
  this.year = year
  this.fuel = fuel
}

Car.prototype.addFuel = function(fuel) {
  this.fuel += fuel
}

const tacoma = new Car({make: "Toyota", model: "Tacoma", year: 2014, fuel: 100})

tacoma.addFuel(10)
console.log(tacoma.fuel)
