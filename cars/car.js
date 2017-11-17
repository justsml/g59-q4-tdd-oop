function Car(mpg) {
  this.gallons = 0
  this.odometer = 0
  this.mpg = mpg
  this.trips = []
}

Car.prototype.drive = function(miles) {
  this.odometer = this.odometer + miles
  this.trips.push(miles + ' miles')
  this.gallons = this.gallons - miles / 10
}

Car.prototype.fill = function(gallons) {
  this.gallons = this.gallons + gallons
}

module.exports = Car
