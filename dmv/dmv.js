function DMV(agents) {
  this.agents = agents
  this.inLine = []
  this.assignedCustomers = [];


};


DMV.prototype.customersInLine = function () {
  return this.inLine
};

DMV.prototype.enter = function(customer){
  this.inLine.push(customer)
};

DMV.prototype.currentCustomerFor = function (agent){
  for(var i = 0; i < this.assignedCustomers.length; i++){
  var assignment =  this.assignedCustomers[i];
  if(assignment.agent == agent){
    return assignment.customer;
  }
  }
  return null;

  // return this.assignedCustomers.filter((assignment) => {
  //   return assignment.agent == agent;
  // })[0].customer;
};

DMV.prototype.nextCustomer = function (){
  var nextAvailableAgent = this.agents.shift();
  var nextCustomer = this.inLine.shift();
  this.assignedCustomers.push({
    agent: nextAvailableAgent,
    customer: nextCustomer
  });

  return null;
};

module.exports = DMV;
