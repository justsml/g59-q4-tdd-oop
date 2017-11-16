module.exports = Car

function Car({mpg, odometer, trips, gallons}) {
if (!(this instanceof Car)) { return new Car({mpg, odometer, trips, gallons}) }
  this.odometer = 0
  this.trips = []
  this.gallons = 0
}

Car.prototype.fill = function(gallons) {
  this.gallons += gallons
}

Car.prototype.drive = function(num){
  this.trips.push(num + ' miles')
  this.odometer += num
  this.gallons = num/this.gallons
}
