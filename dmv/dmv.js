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
  const currentCustomer = this.customers.shift()
  this.agentList.find(agent => {
    if (!this.attending[agent]) {
      this.attending[agent] = currentCustomer
      return true
    }
  })
}

DMV.prototype.resolve = function(customer) {
  this.agentList.find(agent => {
    if (this.attending[agent] === customer) {
      this.attending[agent] = null
      return true
    }
  })
}
