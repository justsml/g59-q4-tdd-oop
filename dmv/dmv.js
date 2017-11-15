function DMV (agents){
  this.agents = agents
  this.inLine =[]
  this.assignedCustomers =[];
};

DMV.prototype.customersInLine = function (){

}
DMV.prototype.currentCustomerFor = function (agent){
  //find the agent in the assined Customer array
  //return the assigned customer
  for (let i=0;i<this.assignedCustomers.length;i++){
    var assignment = this.assignedCustomers[i];
    if (agent == assignment.agent){
      return assignment.customer
    }
  }

  // return this.assignedCustomers.filter((asignment) => {
  //   return assignment.agent == agent;
  // })[0].customer;

  return null;
}

DMV.prototype.enter = function(customer){
  this.inLine.push(customer)
}

// DMV.prototype.poop = function(){
//   return null
// };

DMV.prototype.nextCustomer = function(){


  //get the next available agent
  var nextAvailableAgent = this.agents.shift();
  var nextCustomer = this.inLine.shift();
  //store the agent and customer in the assigned Customer array;
  //since its not returning anything its is just modifying values
  this.assignedCustomers.push({
    agent:nextAvailableAgent,
    customer:nextCustomer
  });
}

// function DMV(agents) {
// this.agents = agents
// this.customers = []
// };
//
// DMV.prototype.customersInLine = function () {
//   return this.customers
//   .filter(customer => !customer.agent)
//   .map(customer => customer.customer)
// };
//
// DMV.prototype.enter = function (customer) {
//   this.customers.push({customer, agent:null})
// }
//
// DMV.prototype.currentCustomerFor = function (agent){
//   let customersServed = this.customers
//   .filter(customer => customer.agent === agent)
//   console.log('customersServed', customersServed);
//   if (customerServed.length === 0){
//     return null
//   }
//   return customersServed[0].customer
// }
//
// DMV.prototype.nextCustomer = function (){
//
//   let customers = this.customers.filter(customer => !customer.agent)
//   let lastCust = customers[0]
//   let agentIndex = this.customer.length % this.agents.length
//   lastCust.agent = this.agent[agentsIndex]
//   console.log(`agent`, agentIndex);
// }
//
// module.exports = DMV;
