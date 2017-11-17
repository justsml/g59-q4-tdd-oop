function DMV(agents) {
  this.agents = agents;
  this.inLine = [];
  this.assignedCustomers = {};
};

DMV.prototype.customersInLine = function () {
  return this.inLine;
};

DMV.prototype.enter = function (customer) {
  return this.inLine.push(customer)
};

DMV.prototype.currentCustomerFor = function (agent) {
  this.assignedCustomers[this.agent] =
};

DMV.prototype.nextCustomer = function () {
  // doesn't return anything
  // get next available agent
  var nextAvailableAgent =  this.agents.shift()
  // get the next customer in line
  var nextCustomer = this.inLine.shift()
  // store the agent and customer in the assigned customers array
  this.assignedCustomers.push({
    agent:nextAvailableAgent,
    customer: nextCustomer
  })
};

module.exports = DMV;
