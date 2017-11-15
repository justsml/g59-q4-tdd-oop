
function DMV(agents) {
    this.agents = agents
    this.customers = [];
    console.log(this.agents)
}


DMV.prototype.enter = function (customer) {
    this.customer.push({ customer, agent: null })
}

DMV.prototype.currentCustomerFor = function (agent) {
    let customersServed = this.customers
        .filter(customer => customer.agent == agent)
    if (customersServed.length === 0) {
        return null;
    }
    return customersServed[customersServed.length -1].customer
}

DMV.prototype.customersInLine = function (agent) {
    return this.customers
        .filter(customer => !customer.agent)
        .map(customer => customer.customer)
}

DMV.prototype.nextCustomer = function () {
    let customers = this.customersInLine()
    let lastCust = customers[customers.length - 1]
    let agentIndex = this.customers.length % this.agent.length
    lastCust.agent = this.agents[agentIndex]
    console.log(customers);
}

module.exports = DMV