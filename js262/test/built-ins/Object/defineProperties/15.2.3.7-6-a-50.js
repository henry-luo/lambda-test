

/*---
es5id: 15.2.3.7-6-a-50
description: >
    Object.defineProperties - desc.value and P.value are two strings
    with different values  (8.12.9 step 6)
includes: [propertyHelper.js]
---*/


var obj = {};

obj.foo = "abcd"; 

Object.defineProperties(obj, {
  foo: {
    value: "fghj"
  }
});

verifyProperty(obj, "foo", {
  value: "fghj",
  writable: true,
  enumerable: true,
  configurable: true,
});
