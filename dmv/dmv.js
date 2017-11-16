function DMV(agents) {
  this.inLine = []
  this.agents = agents
  this.assignedCustomers = []
};

DMV.prototype.customersInLine = function() {
  return this.inLine
};

DMV.prototype.enter = function(customer) {
  this.inLine.push(customer)
};

DMV.prototype.currentCustomerFor = function(agent) {
  //find the agent in the assignedCustomers array
  for (var i = 0; i < this.assignedCustomers.length; i++) {
    var assignment = this.assignedCustomers[i];
    if(assignment.agent == agent) {
      return assignment.customer;
    }
  }
  return null;
};

DMV.prototype.nextCustomer = function() {
  var nextAvailableAgent = this.agents.shift();
  var nextCustomer = this.inLine.shift();
  this.assignedCustomers.push({
    agent: nextAvailableAgent,
    customer: nextCustomer
  })  
}

module.exports = DMV;
