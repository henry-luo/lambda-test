

/*---
es5id: 15.2.3.7-6-a-41
description: >
    Object.defineProperties - type of desc.value is different from
    type of P.value (8.12.9 step 6)
includes: [propertyHelper.js]
---*/


var obj = {};

obj.foo = 101; 

Object.defineProperties(obj, {
  foo: {
    value: "102"
  }
});

verifyProperty(obj, "foo", {
  value: "102",
  writable: true,
  enumerable: true,
  configurable: true,
});
