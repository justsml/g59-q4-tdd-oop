module.exports = Car;

function Car({mpg, gallons, odometer, trips}) {
    if (!(this instanceof Car)) {
        return new Car ({mpg, gallons, odometer, trips});
    }
    this.gallons = 0;
    this.odometer = 0;
    this.trips = [];
    this.mpg = 10;
}


Car.prototype.drive = function(distance) {
    this.gallons -= distance / this.mpg;
    this.odometer += distance;
    this.trips.push(distance + " miles");
};
