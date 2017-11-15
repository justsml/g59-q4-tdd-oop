module.exports = Car

function Car(gallons) {
    this.gallons=gallons,
    this.trips=[],
    this.odometer = 0
}

Car.prototype.fill = function(gas) {
    this.gallons = this.gallons+=gas;
};

Car.prototype.drive = function(miles) {
    this.gallons -= miles/10;
    this.odometer += miles;
    this.trips.push(miles + ' miles');
};
