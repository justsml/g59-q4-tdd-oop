var Robot = require('../robot');

describe('Robot', ()=> {

  it('starts off at position 0,0 and the battery power given', ()=> {
    var robot = new Robot(17);

    expect(robot.position()).toEqual([0,0]);

    expect(robot.battery()).toEqual(17);
  });

  // it("can move up", function () {
  //   var robot = new Robot(8);
  //   robot.moveUp();
  //   expect(robot.position()).toEqual([0, 1]);
  //
  //   robot.moveUp();
  //   expect(robot.position()).toEqual([0, 2]);
  // });
  //
  // it("can move left", function () {
  //   var robot = new Robot(8);
  //   robot.moveLeft();
  //   expect(robot.position()).toEqual([-1, 0]);
  //
  //   robot.moveLeft();
  //   expect(robot.position()).toEqual([-2, 0]);
  // });
  //
  // it("can record their history", function () {
  //   robot = new Robot(8);
  //   expect(robot.history()).toEqual([]);
  //
  //   robot.moveLeft();
  //   expect(robot.history()).toEqual(["left"]);
  //
  //   robot.moveUp();
  //   expect(robot.history()).toEqual(["left", "up"]);
  // });

});
