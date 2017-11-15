function Robot(startCharge) {
  this._position = [0,0]
  this._battery = startCharge
  this._history = []
}

Robot.prototype.position = function() {
  return this._position
}

Robot.prototype.moveUp = function() {
  this._position[1] += 1;
  this._history.push('up')
}

Robot.prototype.moveLeft = function() {
 this._position[0] -= 1;
 this._history.push('left')
}

Robot.prototype.battery = function(num) {
  return this._battery
}

Robot.prototype.history = function() {
  return this._history
}

module.exports = Robot
