function DMV(agents) {
  this.agents = agents;
  this.inLine = [];
  this.assignedCustomer = [];
}

DMV.prototype.enter = function(customer) {
  this.inLine.push(customer);
};

DMV.prototype.customersInLine = function() {
  return this.inLine;
};

DMV.prototype.currentCustomerFor = function(agent) {
  // find agent in the assignedCustomer array
  for (var i = 0; i < this.assignedCustomer.length; i++) {
    var assignment = this.assignedCustomer[i];

    if (assignment.agent === agent) {
      return assignment.customer;
    }
  }
  return null;

  // using filter
  // return this.assignedCustomer.filter((assignment) => {
  // 	return assignment.agent == agent;
  // })[0].customer;
};

DMV.prototype.nextCustomer = function() {
  // get next avaliable agent
  var nextAvaliableAgent = this.agents.shift();
  // get next customer inLine
  var nextCutomer = this.inLine.shift();
  // store the agetn and customer in the assigned Customers array
  this.assignedCustomer.push({
    agent: nextAvaliableAgent,
    customer: nextCutomer
  });
};

module.exports = DMV;
