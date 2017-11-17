module.exports = Car

function Car(mpg) {
    this.gallons = 0
    this.mpgs = mpg
    this.odometer = 0
    this.trips = []

}


Car.prototype.fill = function(gal) {
    this.gallons += gal
}

Car.prototype.drive = function(miles) {
    this.gallons -= (miles/this.mpgs)
    this.odometer += miles
    this.trips.push(miles + ' miles')
}