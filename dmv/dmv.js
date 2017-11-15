// function DMV(agents) {
// 	this._customersInLine = [];
// 	this._customers = [];
// 	this._agents = agents;
// 	this._currentCustomerFor = null;

// };

// DMV.prototype.enter = function(name) {
// 	this._customersInLine.push(name);

// 	this._customers.push({name})
// }

// DMV.prototype.customersInLine = function() {
//   return this._customersInLine;
// };

// DMV.prototype.currentCustomerFor = function(agent) {
// 	let currentCustomers = this._customers.filter(c => c.agent === agent)
// 	console.log(currentCustomers, agent,'currentCustomers line21')
// 	if (currentCustomers.length === 0) {
// 		return null
// 	} 
// 		return currentCustomers.name
// };

// DMV.prototype.nextCustomer = function() {
// 	let agentIndex = this._customers.length % this._agents.length;

// 	let nextInLine = this._customers.find(c => !c.agent)

// 	if (nextInLine) {
// 		nextInLine.agent = this._agents[agentIndex]
// 	}
// 	console.log(nextInLine, "nextInLine line37")

// };






// check the test and pull out all the function used 
// see if any of them takes arguments
// look at what the function are doing (is it a mutator function or accessing function)
// function DMV(agents) {
// 	this.agents = agents;
// 	this.customers = [];
// };

// // accces method
// DMV.prototype.customersInLine = function(){
// 	return this.customers.filter(customer => !customer.agent).map(customer => customer.customer)
// };

// DMV.prototype.enter = function (customer) {
// 	this.customers.push({customer});
// };

// DMV.prototype.currentCustomerFor = function(agent){
// 	let customerServed = this.customers.filter(customer => customer.agent === agent)
// 	console.log(customerServed)
// 	if(customerServed.length === 0) {
// 		return null
// 	}
// 	return customerServed[0].customer;
// };
// // use modulo to divide the length of all the customers in line by how many agents. That will give you the index of the agent that is avaliable 
// DMV.prototype.nextCustomer = function(){
// 	let customers = this.customersInLine.filter(customer => !customer.agent);
// 	let lastCust = customers[0];
// 	let agentIndex = this.customers.length % this.agents.length;
// 	lastCust.agent = this.agent[agentIndex];

// };



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

	// using filter 
	// return this.assignedCustomer.filter((assignment) => {
	// 	return assignment.agent == agent;
	// })[0].customer;
	
}

DMV.prototype.nextCustomer = function() {
	// get next avaliable agent
	var nextAvaliableAgent = this.agents.shift();
	// get next customer inLine
	var nextCutomer = this.inLine.shift();
	// store the agetn and customer in the assigned Customers array
	this.assignedCustomer.push({ 
		agent: nextAvaliableAgent, 
		customer: nextCutomer 
	});
}

DMV.prototype.resolve = function(customer) {
	// find customer in assingedCustomer array

	// remove customer
}

module.exports = DMV;


