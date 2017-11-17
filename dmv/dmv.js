module.exports = DMV

function DMV(agents) {
  this.agentList = agents
  this.attending = {}
  this.customers = []
}

DMV.prototype.enter = function(customer) {
  this.customers.push(customer)
}

DMV.prototype.customersInLine = function() {
  return this.customers
}

DMV.prototype.currentCustomerFor = function(agent) {
  return this.attending[agent] ? this.attending[agent] : null
}

DMV.prototype.nextCustomer = function() {
  if (this.customers.length === 0) {
    throw new Error('No customers')
  }
  const currentCustomer = this.customers.shift()
  let currentAgent = null;
  this.agentList.forEach(agent => {
    if (!this.attending[agent]) {
      this.attending[agent] = currentCustomer
      currentAgent = agent
    }
  })
  return {agent: currentAgent, customer: currentCustomer}
}

DMV.prototype.resolve = function(customer) {
  this.agentList.find(agent => {
    if (this.attending[agent] === customer) {
      this.attending[agent] = null
      return true
    }
  })
}
