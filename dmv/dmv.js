function DMV(agents) {
  this.agents = agents
  this.customers = []
};

DMV.prototype.customersInLine = function () {
  return this.customers
  .filter(customer => !customer.agent)
  .map(customer => customer.customer)
};

DMV.prototype.enter = function (customer) {
  this.customers.push({customer})
}

DMV.prototype.currentCustomerFor = function (agent) {
  let customersServed = this.customers
  .filter(customer => customer.agent === agent)
  if (customersServed.length === 0) {
    return null
  }
  return customersServed[0].customer
}

DMV.prototype.nextCustomer = function () {
  let customers = this.customersInLine()
  let lastCust = customers[customers.length - 1]
  let agentIndex = this.customers.length % this.agents.length
  lastCust.agent = this.agents[agentIndex]
}

module.exports = DMV;
