// function DMV(agents) {
//     this.agents = agents
//     this.customers = []
//     this.queue = []
// }

// DMV.prototype.customersInLine = function () {
//     return this.customers.filter(customer => !customer.agent)
//     .map(customer => customer.customer)
// }

// DMV.prototype.enter = function (customer) {
//     this.customers.push({customer, agent: null})
// }

// DMV.prototype.currentCustomerFor = function (agent) {
//     let customersServed = this.customers
//     .filter(customer => customer.agent === agent)
//     if (customersServed.length === 0){
//         return null
//     }
//     return customersServed[0].customer
// }



// DMV.prototype.nextCustomer = function () {
//     let customers = this.customers.filter(customer => !customer.agent)
//     let lastCust = customers[0]
//     let agentIndex = this.customers.length % this.agents.length
//     lastCust.agent = this.agent[agentIndex]
// }



function DMV(agents) {
        this.agents = agents
        this.customers = []
        this.inLine = []
        this.assignedCustomers = []

        agents.forEach(
            function(agent){
                this.assignedCustomers[agent] = null
            }.bind(this)
        )
    }

    DMV.prototype.customersInLine = function (customer) {
        return this.inLine
    }

    DMV.prototype.enter = function (customer) {
        return this.inLine.push(customer)
    }

    DMV.prototype.currentCustomerFor = function (agent) {

        // for (var i = 0; i < this.assignedCustomers.length; i++) {
        //     var assignment = this.assignedCustomers[i]
        //     if (assignment.agent == agent){
        //         return assignment.customer
        //     }
            
        // }
        return this.assignedCustomers[agent]
        // return this.assignedCustomers.filter((assignment) => {
        //     return assignment.agent == agent
        // })[0].customer
    }

    DMV.prototype.nextCustomer = function (agent) {
        var nextAvailableAgent = this.agents[0]
        var nextCustomer = this.inLine.shift()
        
        this.assignedCustomers.push({
            agent: nextAvailableAgent,
            customer: nextCustomer
        })
        console.log(this.assignedCustomers)

    }

    DMV.prototype.resolve = function (customer) {
        for (var i = 0; i < this.assignedCustomers.length; i++) {
            var assignment = this.assignedCustomers[i]
            if (assignment.customer == customer){
                return assignment.customer = null
                
            }
        }
    }
 module.exports = DMV;


