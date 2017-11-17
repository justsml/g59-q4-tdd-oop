module.exports = Car

function Car(mpg) {
  this.mpg = mpg
  this.gallons = 0;
  this.odometer = 0
  this.trips = []
}

Car.prototype.fill = function(gallons) {
  this.gallons  += gallons
}

Car.prototype.drive = function(distance) {
  this.odometer += distance
  this.gallons  -= distance / this.mpg
  this.trips.push(`${distance} miles`)
}
