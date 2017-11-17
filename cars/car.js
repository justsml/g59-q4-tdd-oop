module.exports = Car

function Car({mpg, odometer, trips, gallons}) {
    
    if (!(this instanceof Car)) { return new Car({mpg, odometer, trip, gallons}) }

    this.mpg = mpg || 10,
    this.odometer = odometer || 0,
    this.trips = trips || [],
    this.gallons = gallons || 0
}

Car.prototype.fill = function(gallons) {
    this.gallons += gallons
}

Car.prototype.drive = function(miles) {
    this.gallons -= (miles / this.mpg),
    this.trips.push(miles+" miles"),
    this.odometer += miles
}
