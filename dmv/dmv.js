function DMV(agents) {
	this.agents = agents;
	this.inLine = [];
	this.assignedCustomer = [];
}

DMV.prototype.enter = function(customer) {
	this.inLine.push(customer)
}

DMV.prototype.customersInLine = function() {
	return this.inLine;
}

DMV.prototype.currentCustomerFor = function(agent) {
	// find agent in the assignedCustomer array
	for (var i = 0; i < this.assignedCustomer.length; i++) {
		var assignment = this.assignedCustomer[i];
		if (assignment.agent === agent) {
			return assignment.customer;
		}
	}
	return null;
}

DMV.prototype.nextCustomer = function() {
	var nextAvaliableAgent = this.agents.shift();
	var nextCustomer = this.inLine.shift();
	this.assignedCustomer.push({
		agent: nextAvaliableAgent,
		customer: nextCustomer
	});
}

DMV.prototype.resolve = function(customer) {
  
}

module.exports = DMV;
