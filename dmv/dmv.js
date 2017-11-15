function DMV(agents) {
  this.agents = agents;
  this.customers = []
}
DMV.prototype.customersInLine = function() {
  return this.customers
  .filter(customer => !customer.agent)
  .map(customer => customer.customer)
}
DMV.prototype.enter = function(customer) {
  this.customers.push({customer, agent: null})
}
DMV.prototype.currentCustomerFor = function(agent) {
  let customersServed = this.customers
    .filter(customer => customer.agent === agent)

  console.log('customersServed', customersServed)
  if (customersServed.length === 0) {
    return null
  }
  return customersServed[0].customer

}
/**
 * 1. Find customers without 'agent' key
 * 2. Pick last customer
 * 3. Find next agent (using modulo magic)
 * 4. Assigning agent to the customer Object
 */
DMV.prototype.nextCustomer = function() {
  let customers = this.customers.filter(customer => !customer.agent)
  let lastCust = customers[0]
  let agentIndex = this.customers.length % this.agents.length
  lastCust.agent = this.agents[agentIndex]
  console.log('agent', agentIndex, this.agents[agentIndex])
  console.log('Customer', lastCust)
  /**
   * lastCust should look like:
   * {
   *   customer: 'Drivin Dave',
   *   agent: 'Surly'
   * }
   */
}



module.exports = DMV

