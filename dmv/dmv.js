function DMV(agents) {
  this.agents = agents
  this.customers = []
};

DMV.prototype.customersInLine = function (customer) {
  this.customer = customer
};

DMV.prototype.enter = function () {
  this.customers.push(this.agents)
}

DMV.prototype.currentCustomerFor = function () {

}

DMV.prototype.nextCustomer = function () {

}

module.exports = DMV;
