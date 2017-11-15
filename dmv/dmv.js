function DMV(agents) {
    this.agents = agents,
    this._customersInLine = [],
    this._nextCustomer = null;
    this._currentCustomerFor = {}
}

DMV.prototype.customersInLine = function () {
    return this._customersInLine;
};
DMV.prototype.enter = function (person) {
    return this._customersInLine.push(person)
};


DMV.prototype.currentCustomerFor = function (agent) {
    return this._currentCustomerFor[agent]= this._nextCustomer;
};
DMV.prototype.nextCustomer = function () {
    return this._nextCustomer = this._customersInLine.shift()
};




module.exports = DMV;
