// ES 5 Object/'Class' using prototype - JS original recipe
// 1) sends customers to the next available agent
// 2) allows you to resolve an issue, which frees an agent up for the next customer enter
// 3) adds a customer to the line

function DMV(agents) {
  this.agents = agents;
  this.attendingTo = {};

  agents.forEach(
    function(agent) {
      this.attendingTo[agent] = null;
    }.bind(this)
  );
  this.customers = [];
  this.currentCustomer = null;
}

// PUSH NEW CUSTOMERS INTO THE "this.customers = []"
DMV.prototype.enter = function(customer) {
  this.customers.push(customer);
};

// SET 'customersInLine' TO EQUAL THE CUSTOMERS ARRAY
DMV.prototype.customersInLine = function() {
  return this.customers;
};

// SET THE
DMV.prototype.currentCustomerFor = function(agent) {
  return this.attendingTo[agent];
};

// THIS TAKES THE FIRST ITEM IN THE CUSTOMERS ARRAY AND SETS IT AS THE CURRENT CUSTOMER
DMV.prototype.nextCustomer = function() {
  this.currentCustomer = this.customers.shift();
  for (var i = 0; i < this.agents.length; i++) {
    if (this.attendingTo[this.agents[i]] === null) {
      return (this.attendingTo[this.agents[i]] = this.currentCustomer);
    }
  }
};

DMV.prototype.resolve = function(customer) {
  for (agent in this.attendingTo) {
    if (this.attendingTo[agent] === customer) {
      return (this.attendingTo[agent] = null);
    }
  }
};

module.exports = DMV;
