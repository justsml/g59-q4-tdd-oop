module.exports = Car

function Car({gallons, odometer, trips, mpg}){
  this.gallons = 0
  this.odometer = 0
  this.trips = []
  this.mpg = 10
}

Car.prototype.fill = function(gallons){
  this.gallons += gallons
}

Car.prototype.drive = function(distance){
  this.gallons -= (distance/this.mpg)
  this.odometer += distance
  this.trips.push(distance + ' miles')
}
