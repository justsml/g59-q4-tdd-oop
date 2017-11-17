function Robot(startCharge) {
  this._battery = startCharge
  this._position = [0, 0]
  this._history = []
}

Robot.prototype.position = function() {
  return this._position
}

Robot.prototype.battery = function() {
  return this._battery
}

Robot.prototype.moveLeft = function(x){
  this._history.push('left')
  this._position[0] --;
}

Robot.prototype.moveUp = function(x){
  this._history.push('up')
  this._position[1] ++;
}

Robot.prototype.history = function(){
  return this._history
}

module.exports = Robot
