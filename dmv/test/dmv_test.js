var DMV = require('../dmv')
var expect = require('chai').expect

describe('DMV', () => {
  describe('#enter', () => {
    it('adds a customer to the line', () => {
      var dmv = new DMV(['Surly Steve', 'Angry Amy', 'Peeved Pete'])

      expect(dmv.customersInLine()).to.deep.equal([])

      dmv.enter("Drivin' Dave")
      expect(dmv.customersInLine()).to.deep.equal(["Drivin' Dave"])
    })
  })

  it("sends customers to the next available agent", ()=> {
    var dmv = new DMV(["Surly Suneel", "Angry Angelica", "Peeved Petra"]);

    dmv.enter("Drivin' Dave");
    dmv.enter("Speedy Spencer");
    dmv.enter("Talkin' Tammy");

    expect(dmv.currentCustomerFor("Surly Suneel")).to.equal(null);

    // who is left in line
    // which agent is assigned to which customer
      // have an array of objects
        // each object is the agent/customer pair

    dmv.nextCustomer();
    expect(dmv.currentCustomerFor("Surly Suneel")).to.equal("Drivin' Dave");
    expect(dmv.customersInLine()).to.deep.equal(["Speedy Spencer", "Talkin' Tammy"]);

    dmv.nextCustomer();
    expect(dmv.currentCustomerFor("Surly Suneel")).to.equal("Drivin' Dave");
    expect(dmv.currentCustomerFor("Angry Angelica")).to.equal("Speedy Spencer");
    expect(dmv.customersInLine()).to.deep.equal(["Talkin' Tammy"]);

    dmv.nextCustomer();
    expect(dmv.currentCustomerFor("Peeved Petra")).to.equal("Talkin' Tammy");
    expect(dmv.customersInLine()).to.deep.equal([]);
  });

  it("allows you to resolve an issue, which frees an agent up for the next customer", ()=> {
    var dmv = new DMV(["Surly Suneel", "Angry Angelica"]);

    dmv.enter("Skidding Skye");
    dmv.enter("Drivin' Dave");
    dmv.nextCustomer();
    dmv.nextCustomer();
    expect(dmv.currentCustomerFor("Angry Angelica")).to.equal("Drivin' Dave");

    dmv.resolve("Drivin' Dave");
    expect(dmv.currentCustomerFor("Angry Angelica")).to.equal(null);

    dmv.enter("Texting Ty");
    dmv.nextCustomer();
    expect(dmv.currentCustomerFor("Angry Angelica")).to.equal("Texting Ty");
  });
})
