//DMV Tests:
//(5) sends customers to the next available agent
//(6) allows you to resolve an issue, which frees an agent up fo the next customer
//(7) adds a customer to the line

function DMV(agents) {
    this.agents = agents;
    this.attendingTo = {};

    agents.forEach(
        function (agent) {
        this.attendingTo[agent] = null;
    }.bind(this)
    );
    this.customers = [];
    this.currentCustomer = null;
}

//NOW PUSH NEW CUSTOMERS INTO THE EMPTY ARRAY "this.customers = []" from line 15

DMV.prototype.enter = function(customer) {
    this.customers.push(customer);
};

//SET 'customersInLine' TO EQUAL THE CUSTOMERS ARRAY
DMV.prototype.customersInLine = function () {
    return this.customers
};

//SET THE NEXT CUSTOMER TO A NEW Attending AGENT
DMV.prototype.currentCustomerFor = function(agent) {
    return this.attendingTo[agent];
};

//TAKE THE FIRST ITEM IN THE CUSTOMER ARRAY AND SET IT AS THE CURRENT CUST.
DMV.prototype.nextCustomer = function () {
    this.currentCustomer = this.customers.shift();
    for (var i = 0; i < this.agents.length; i++) {
        if (this.attendingTo[this.agents[i]] === null) {
            return (this.attendingTo[this.agents[i]] = this.currentCustomer);
        }
    }
};

DMV.prototype.resolve = function(customer) {
  for(agent in this.attendingTo) {
      if (this.attendingTo[agent] === customer) {
          return (this.attendingTo[agent] = null);
        }
    }
};

module.exports = DMV;
