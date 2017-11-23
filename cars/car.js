// car.fill()
// car.drive()
// CAR.GALLONS
// CAR.ODOMETER
// CAR.TRIPS



module.exports = Car;
function Car({ mpg, gallons, odometer, trips }) {
  if (!(this instanceof Car)) {
    return new Car({ mpg, gallons, odometer, trips });
  }
  this.gallons = 0;
  this.odometer = 0;
  this.trips = [];
  this.mpg = 10;
}

Car.prototype.fill = function(gallons) {
  this.gallons += gallons;
};

Car.prototype.drive = function(distance) {
  this.gallons -= distance / this.mpg;
  this.odometer += distance;
  this.trips.push(distance + " miles");
};


// function Car(mpg) {
//   this.fill = mpg;
//   this.trips = [ ]
//   this.odometer = 0
// }
//
// Car.prototype.fill = function(gallons) {
//   this._gallons += gallons
// }
//
// Car.prototype.trips = function() {
//   return this._trips
// }
//
// Car.prototype.odometer = function() {
//   this._trips.push('odometer')
//   return this._odometer
// }
//
// Car.prototype.drive = function() {
//   this._trips.push('odometer')
//   return this._drive
// }
//
//
// module.exports = Car



// function Car(mpg) {
//   this._fill = mpg;
//   this._odometer = 0
//   this._trips = []
// }
//
// Car.prototype.drive = function() {
//   this._trips.push('odometer')
//   return this._drive
// }
