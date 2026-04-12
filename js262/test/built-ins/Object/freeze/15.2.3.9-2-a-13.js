

/*---
es5id: 15.2.3.9-2-a-13
description: Object.freeze - 'P' is own index property of the Object
includes: [propertyHelper.js]
---*/


var obj = {
  0: 0,
  1: 1,
  length: 2
};

Object.freeze(obj);

verifyProperty(obj, "0", {
  value: 0,
  writable: false,
  configurable: false,
});
