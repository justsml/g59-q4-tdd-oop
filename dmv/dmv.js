function DMV(agents) {
  this.agents = agents;
  this.inLine = [];
  this.assignedCustomers = [];
};

DMV.prototype.customersInLine = function () {

};

DMV.prototype.currentCustomerFor = function (agent) {

for (var i=0; i<this.assignedCustomers.length; i++) {
  var assignment = this.assignedCustomers[i]
  if (this.assignedCustomers[i][agent] == agent) {
    return assignment.customer
    }
}

return null;

// return this.assignedCustomers.filter((assignment) => {
//   return assignment.agent == agent
// })[0].customer;

};

DMV.prototype.nextCustomer = function () {
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
