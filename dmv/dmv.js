function DMV(agents) {
  this.agents = agents;
  this.customers = []
};

DMV.prototype.customersInLine = function () {
  return this.customers
  .filter(customer => !customer.agent)
  .map(customer => customer.customer)
};

DMV.prototype.enter =function(customer) {
  this.customers.push({customer, agent: null})
};

DMV.prototype.currentCustomerFor =function(agent) {
  let customersServed = this.customers
  .filter(customer => customer.agent == agent)
  if (customersServed.length == 0) {
    return null
  }
  return customerServed[0].customer
};
/**
*1. find customers without 'agent key'
*2. pick last customer
*3. find next agent (using modulo magic)
*4. assigning agent to the customer object
*/
DMV.prototype.nextCustomer =function () {
  let customers = this.customers.filter(customer => !customer.agent)
  let lastCust = customers[0]
  let agentIndex = this.customers.length % this.agents.length
  lastCust.agent = this.agents[agentIndex]
  console.log('agent', agentIndex, this.agents[agentIndex]);
  console.log('customer', lastCust);
  /**
  * lastCust should look like:
  {}
  *
  */
};


module.exports = DMV;
