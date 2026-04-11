

/*---
es5id: 15.2.3.5-4-316
description: >
    Object.create - enumerable properties of 'Properties' are given
    numerical names (15.2.3.7 step 7)
---*/

function getFunc() {
  return 20;
}

function setFunc() {}

var newObj = Object.create({}, {
  0: {
    value: 100,
    enumerable: true,
    writable: true,
    configurable: true
  },
  1: {
    get: getFunc,
    set: setFunc,
    enumerable: true,
    configurable: true
  },
  2: {
    value: 200,
    enumerable: true,
    writable: true,
    configurable: true
  }
});

assert.sameValue(newObj[0], 100, 'newObj[0]');
assert.sameValue(newObj[1], 20, 'newObj[1]');
assert.sameValue(newObj[2], 200, 'newObj[2]');
