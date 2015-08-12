var DMV = require('../dmv');

describe('DMV', ()=> {

  describe("#enter", ()=> {
    it("adds a customer to the line", ()=> {
      var dmv = new DMV(["Surly Steve", "Angry Amy", "Peeved Pete"]);

      expect(dmv.customersInLine()).toEqual([]);

      dmv.enter("Drivin' Dave");
      expect(dmv.customersInLine()).toEqual(["Drivin' Dave"]);
    });
  });

  // it("sends customers to the next available agent", ()=> {
  //   var dmv = new DMV(["Surly Suneel", "Angry Angelica", "Peeved Petra"]);
  //
  //   dmv.enter("Drivin' Dave");
  //   dmv.enter("Speedy Spencer");
  //   dmv.enter("Talkin' Tammy");
  //
  //   expect(dmv.currentCustomerFor("Surly Suneel")).toEqual(null);
  //
  //   dmv.nextCustomer();
  //   expect(dmv.currentCustomerFor("Surly Suneel")).toEqual("Drivin' Dave");
  //   expect(dmv.customersInLine()).toEqual(["Speedy Spencer", "Talkin' Tammy"]);
  //
  //   dmv.nextCustomer();
  //   expect(dmv.currentCustomerFor("Surly Suneel")).toEqual("Drivin' Dave");
  //   expect(dmv.currentCustomerFor("Angry Angelica")).toEqual("Speedy Spencer");
  //   expect(dmv.customersInLine()).toEqual(["Talkin' Tammy"]);
  //
  //   dmv.nextCustomer();
  //   expect(dmv.currentCustomerFor("Peeved Petra")).toEqual("Talkin' Tammy");
  //   expect(dmv.customersInLine()).toEqual([]);
  // });
  //
  // it("allows you to resolve an issue, which frees an agent up for the next customer", ()=> {
  //   var dmv = new DMV(["Surly Suneel", "Angry Angelica"]);
  //
  //   dmv.enter("Skidding Skye");
  //   dmv.enter("Drivin' Dave");
  //   dmv.nextCustomer();
  //   dmv.nextCustomer();
  //   expect(dmv.currentCustomerFor("Angry Angelica")).toEqual("Drivin' Dave");
  //
  //   dmv.resolve("Drivin' Dave");
  //   expect(dmv.currentCustomerFor("Angry Angelica")).toEqual(null);
  //
  //   dmv.enter("Texting Ty");
  //   dmv.nextCustomer();
  //   expect(dmv.currentCustomerFor("Angry Angelica")).toEqual("Texting Ty");
  // });

});
