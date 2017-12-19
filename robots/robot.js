//Robot tests 15-18 (4 total)
// 15) starts off at position 0,0 and the battery power given
// 16) can move up
// 17) can move left
// 18) can record their hisotry

function Robot(startCharge) {
    this._battery = startCharge;
    this._position = [0,0];
    this._history = [];
}

Robot.prototype.battery = function() {
    return this._battery;
}

Robot.prototype.position = function() {
    return this._position;
}

Robot.prototype.moveUp = function() {
    this._history.push("up");
    this._position[1] ++
}

Robot.prototype.moveLeft = function() {
    this._history.push("left");
    this._position[0] --    
}

Robot.prototype.history = function() {
    return this._history;
};

module.exports = Robot;
