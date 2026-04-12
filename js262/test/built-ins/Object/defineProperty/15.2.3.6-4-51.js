

/*---
es5id: 15.2.3.6-4-51
description: >
    Object.defineProperty - desc is data descriptor, test updating all
    attribute values of 'name' (8.12.9 step 4.a.i)
includes: [propertyHelper.js]
---*/

var obj = {
  "property": 1
}; 

Object.defineProperty(obj, "property", {
  value: 1001,
  writable: false,
  enumerable: false,
  configurable: false
});

verifyProperty(obj, "property", {
  value: 1001,
  writable: false,
  enumerable: false,
  configurable: false,
});
