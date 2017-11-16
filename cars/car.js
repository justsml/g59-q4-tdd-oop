module.exports = Car

function Car(mpg) {
this._fill = mpg
}

Car.prototype.fill = function(gallons) {
this._fill(gallons)
}
