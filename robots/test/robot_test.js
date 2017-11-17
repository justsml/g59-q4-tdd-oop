var Robot = require('../robot')
var expect = require('chai').expect

describe('Robot', () => {
  xit('starts off at position 0,0 and the battery power given', () => {
    var robot = new Robot(17)

    expect(robot.position()).to.deep.equal([0, 0])

    expect(robot.battery()).to.equal(17)
  })

  xit('can move up', function() {
    var robot = new Robot(8)
    robot.moveUp()
    expect(robot.position()).to.deep.equal([0, 1])

    robot.moveUp()
    expect(robot.position()).to.deep.equal([0, 2])
  })

  xit('can move left', function() {
    var robot = new Robot(8)
    robot.moveLeft()
    expect(robot.position()).to.deep.equal([-1, 0])

    robot.moveLeft()
    expect(robot.position()).to.deep.equal([-2, 0])
  })

  xit('can record their history', function() {
    robot = new Robot(8)
    expect(robot.history()).to.deep.equal([])

    robot.moveLeft()
    expect(robot.history()).to.deep.equal(['left'])

    robot.moveUp()
    expect(robot.history()).to.deep.equal(['left', 'up'])
  })
})
