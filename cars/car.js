module.exports = Car

function Car({ gallons, odometer, trips }) {
  if (!(this instanceof Car)) {
    return new Car({ gallons, odometer, trips  });
  }
	this.gallons = 0
	this.odometer = 0
	this.trips = []
}

Car.prototype.fill = function(gallons) {
	this.gallons += gallons;
}

Car.prototype.drive = function(gallons) {
	this.gallons = gallons /  this.gallons;
	this.odometer += gallons
	this.trips.push(gallons + ' miles')
}

