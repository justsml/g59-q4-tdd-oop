module.exports = Car

function Car(mpg) {
  this.odometer = 0
  this.gallons = 0
  this.mpg = 10
  this.trips = []
}

Car.prototype.fill = function(gallons) {
  this.gallons += gallons
}

Car.prototype.drive = function(odometer) {
  this.odometer += odometer
  this.gallons -= (odometer/this.mpg)
  this.trips.push(odometer + ' miles')
}
