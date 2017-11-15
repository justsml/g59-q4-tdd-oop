module.exports = Car;

// ES 5 Object/'Class' using prototype - JS original recipe
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
