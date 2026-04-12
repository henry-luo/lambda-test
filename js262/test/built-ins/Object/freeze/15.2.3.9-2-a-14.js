

/*---
es5id: 15.2.3.9-2-a-14
description: >
    Object.freeze - 'P' is own index property of an Array object that
    uses Object's [[GetOwnProperty]]
includes: [propertyHelper.js]
---*/


var arrObj = [0, 1, 2];

Object.freeze(arrObj);

verifyProperty(arrObj, "0", {
  value: 0,
  writable: false,
  configurable: false,
});
