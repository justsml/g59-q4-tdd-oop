function DMV(agents) {
  this.agents = agents
  this.inLine = []
  this.assignedCustomers = []
};

DMV.prototype.customersInLine = function () {
  return this.inLine
};

DMV.prototype.enter = function (customer) {
  this.inLine.push(customer)
}

DMV.prototype.nextCustomer = function () {
  if (this.inLine.length === 0) {
    throw new Error("no customers")
  }

  let nextAvailiableAgent = this.agents.shift()
  let nextCustomer = this.inLine.shift()

  this.assignedCustomers.push({
    agent: nextAvailiableAgent,
    customer: nextCustomer
  })
}

DMV.prototype.currentCustomerFor = function (agent) {
  for (var i = 0; i < this.assignedCustomers.length; i++) {
		let assignment = this.assignedCustomers[i];

		if (assignment.agent === agent) {
			return assignment.customer;
		}
	}
	return null;
}

DMV.prototype.resolve = function (customer) {
  //pull the agent out of the object and put back into the agents
  //delete the object that has the customer name from the array
  for (var i = 0; i < this.assignedCustomers.length; i++) {
    let assignment = this.assignedCustomers[i];

    if (assignment.customer === customer) {
      this.agents.push(assignment.agent)
      this.assignedCustomers.splice(1)
    }
  }
}

module.exports = DMV;
