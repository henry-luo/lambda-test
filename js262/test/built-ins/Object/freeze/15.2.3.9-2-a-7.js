

/*---
es5id: 15.2.3.9-2-a-7
description: >
    Object.freeze - 'P' is own named property of an Arguments object
    that implements its own [[GetOwnProperty]]
includes: [propertyHelper.js]
---*/

var argObj = (function() {
  return arguments;
}());

argObj.foo = 10; 

Object.freeze(argObj);

verifyProperty(argObj, "foo", {
  value: 10,
  writable: false,
  configurable: false,
});
