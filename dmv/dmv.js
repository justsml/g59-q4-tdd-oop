function DMV(agents) {
  this.agents = agents
  this.inLine = []
  this.assignedCustomers = []
}

DMV.prototype.customersInLine = function() {
  return this.inLine
}

DMV.prototype.enter = function(customer) {
  this.inLine.push(customer)
}

DMV.prototype.nextCustomer = function() {
  var nextAvailableAgent = this.agents.shift()
  var nextCustomer = this.inLine.shift()

  if (this.assignedCustomers.customer == null) {
    this.assignedCustomers.push({
      agent: nextAvailableAgent,
      customer: nextCustomer
    })
  }
  // Store the agent and customer in the assigned customers array

  console.log(this.assignedCustomers)
}

DMV.prototype.currentCustomerFor = function(agent) {
  // find the agent in the assignedCustomers array
  for (var i = 0; i < this.assignedCustomers.length; i++) {
    var assignment = this.assignedCustomers[i]
    if (assignment.agent == agent) {
      // found em!!
      return assignment.customer
      // return the assigned customer
    }
  }
  return null
}

DMV.prototype.resolve = function(customer) {
  for (var i = 0; i < this.assignedCustomers.length; i++) {
    var assignment = this.assignedCustomers[i]
    if (assignment.customer == customer) {
      this.agents.push(assignment.agent)
      assignment.customer = null
    }
  }
}

module.exports = DMV
