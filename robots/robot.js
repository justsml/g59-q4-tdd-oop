function Robot(startCharge) {
  this._battery = startCharge
  this._position = [0, 0]
  this._history = []
}

Robot.prototype.battery = function(){
  return this._battery
}

Robot.prototype.position = function() {
  return this._position
}
Robot.prototype.moveLeft = function(x){
  this._position[0] --;
  this._history.push('left')
}

Robot.prototype.moveUp = function(x){
  this._position[1] ++;
  this._history.push('up')
}

Robot.prototype.history = function(x){
  return this._history
}

module.exports = Robot
