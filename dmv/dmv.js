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

// SETS 'customersInLine' TO EQUAL THE CUSTOMERS ARRAY
DMV.prototype.customersInLine = function() {
  return this.customers;
};

// SETS THE 'attendingTo' VARIABLE TO EQUAL THE NEXT AVAILIBLE AGENT
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

// THIS WILL CHECK IF THE VALUE OF 'attendingTo' IS 'customer', AND IF IT IS, IT WILL RESET IT
// BACK TO 'null' TO REPRESENT THAT THE 'customer' INTERACTION IS RESOLVED
DMV.prototype.resolve = function(customer) {
  for (agent in this.attendingTo) {
    if (this.attendingTo[agent] === customer) {
      return (this.attendingTo[agent] = null);
    }
  }
};

module.exports = DMV;
