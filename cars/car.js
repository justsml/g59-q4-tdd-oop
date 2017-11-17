module.exports = Car

function Car({ mpg, gallons, odometer, trips }) {
if (!(this instanceof Car)) {
   return new Car({ mpg, gallons, odometer, trips });
 }
   this.gallons = 0;
   this.odometer = 0;
   this.trips = [];
   this.mpg = 10;
}

Car.prototype = {
  constructor: Car,
  fill: function(num) {
    return this.gallons += num;
  },
  drive: function(miles) {
    this.gallons -= miles/ this.mpg;
    this.odometer += miles;
    this.trips.push(miles + " miles");
  }
}
