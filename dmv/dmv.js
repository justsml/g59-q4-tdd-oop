function DMV(agents) {
  this.agents = agents
  this.customers = []
  this.inline = []
}

DMV.prototype.customersInLine = function(customer) {
  return this.inline.push(customer)
}

DMV.prototype.currentCustomerFor = function(agent) {
  assignedCustomers.forEach(customer => {
    var assignment = this.customer
    if(assignment.agent == agent) {
      return assignment.customer
    }
  })

  return null
}

DMV.prototype.nextCustomer = function() {
  //cj way
  let nextAvailableAgent = this.agents.shift()
  let nextCustomer = this.customersInLine.shift()
  this.assignedCustomers.push({
    agent: nextAvailableAgent,
    customer: nextCustomer
  })

  //Dan way
  // let customers = this.customers.filter(customer => !customer.agent)
  // let lastCust = customers[0]
  // let agentIndex = this.customers.length % this.agents.length
  // lastCust.agent = this.agents[agentIndex]
}

module.exports = DMV;
