

/*---
es5id: 15.2.3.9-2-a-11
description: >
    Object.freeze - 'P' is own index property of the Arguments object
    that implements its own [[GetOwnProperty]]
includes: [propertyHelper.js]
---*/


var argObj = (function() {
  return arguments;
}(1, 2, 3));

Object.freeze(argObj);

verifyProperty(argObj, "0", {
  value: 1,
  writable: false,
  configurable: false,
});
