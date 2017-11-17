module.exports = DMV;

function DMV(agents) {
    this._agents = agents
    this._customersInLine = null || []
    this._currentCustomerFor = []
};

DMV.prototype.currentCustomerFor = function(agent) {
return this._currentCustomerFor.find(customer => customer.agent === agent)
};

DMV.prototype.enter = function(customer) {
    this._customersInLine.push(customer)
};

DMV.prototype.nextCustomer = function() {
let thisAgent = this._agents[0]
let thisCustomer = this._customersInLine.slice()
this._currentCustomerFor
};


DMV.prototype.customersInLine = function() {
    return this._customersInLine
}