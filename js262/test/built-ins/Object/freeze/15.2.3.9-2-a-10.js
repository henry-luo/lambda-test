

/*---
es5id: 15.2.3.9-2-a-10
description: >
    Object.freeze - 'P' is own named property of an Array object that
    uses Object's [[GetOwnProperty]]
includes: [propertyHelper.js]
---*/

var arrObj = [];

arrObj.foo = 10; 

Object.freeze(arrObj);

verifyProperty(arrObj, "foo", {
  value: 10,
  writable: false,
  configurable: false,
});
