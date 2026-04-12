

/*---
es5id: 15.2.3.6-4-68
description: >
    Object.defineProperty - desc.value and name.value are two strings
    with different values (8.12.9 step 6)
includes: [propertyHelper.js]
---*/


var obj = {};

obj.foo = "abcd"; 

Object.defineProperty(obj, "foo", {
  value: "fghj"
});

verifyProperty(obj, "foo", {
  value: "fghj",
  writable: true,
  enumerable: true,
  configurable: true,
});
