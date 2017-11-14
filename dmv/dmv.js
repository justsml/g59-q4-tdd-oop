function DMV(agents) {
  this.DMV = agents
};

DMV.prototype.customersInLine = function (customer) {
  console.log(customer);
};

DMV.prototype.enter = function (customer) {
  customersInLine.push(customer)
}

module.exports = DMV;
