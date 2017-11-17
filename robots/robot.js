function Robot(startCharge) {
  this._battery = startCharge
  this._position = [0, 0]
  this._history = []
}

Robot.prototype.battery = function() {
  return this._battery
}

Robot.prototype.position = function() {
  return this._position
}

Robot.prototype.moveLeft = function(x = 1) {
  this._history.push('left')
  this._position[0] -= x
}

Robot.prototype.moveUp = function(x = 1) {
  this._history.push('up')
  this._position[1] += x
}

Robot.prototype.history = function() {
  return this._history
}

module.exports = Robot
