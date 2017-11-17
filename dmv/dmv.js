function DMV(agents) {
    this.agents = agents,
    this.customers = [];
}

DMV.prototype.customersInLine = function () {
    return this.customers
        .filter(customer=>!customer.agent)
        .map(customer=>customer.customer);
};
DMV.prototype.enter = function (customer) {
    return this.customers.push({"customer": customer});
};

DMV.prototype.currentCustomerFor = function (agent) {

    let customersServed = this.customers
        .filter(customer=> customer.agent===agent);
        if(customersServed.length===0){
            return null;
        }
        return customersServed[0].customer;
};

// find customer without agent key
// pick the last customer  (find bug)
// find next agent (using modulo magic)
// assign agent to the customer Object
DMV.prototype.nextCustomer = function () {
    let customersWithoutAgents = this.customers.filter(customer=>!customer.agent);

    let agentIndex = customersWithoutAgents.length % this.agents.length;

    let nextCustomer = customersWithoutAgents[0];

    nextCustomer.agent = this.agents[agentIndex];
console.log(this.customers)

};




module.exports = DMV;
