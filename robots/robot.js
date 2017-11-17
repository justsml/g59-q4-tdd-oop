function Robot(startCharge) {
  this.position = [0,0];
  this.battery = startCharge;
  this.history = [];
}

Robot.prototype = {
  constructor: Robot,
  position: function() {
    return this.position;
  },
  battery: function() {
    return this.battery;
  }
}

module.exports = Robot
