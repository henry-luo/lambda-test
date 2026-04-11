

/*---
es5id: 15.2.3.9-2-a-12
description: >
    Object.freeze - 'P' is own index property of a String object that
    implements its own [[GetOwnProperty]]
includes: [propertyHelper.js]
---*/


var strObj = new String("abc");

Object.freeze(strObj);

verifyProperty(strObj, "0", {
  value: "a",
  writable: false,
  configurable: false,
});
